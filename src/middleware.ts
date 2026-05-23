import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = [
  "/login",
  "/api/health",
  "/api/auth/login",
  "/_next",
  "/favicon",
  "/api/seed",
];

const SESSION_COOKIE = "isp_session";
const JWT_SECRET_BYTES = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev-secret-change-me-in-production-32bytes!"
);

function isPublic(pathname: string): boolean {
  return PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") && !pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET_BYTES);
    const role = (payload as { role?: string }).role;

    // Protect super admin routes
    if (pathname.startsWith("/super-admin") && role !== "super_admin") {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
      }
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Normal users shouldn't access super admin
    if (pathname.startsWith("/api/admin") && role === "accountant") {
      return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
    }

    const headers = new Headers(req.headers);
    headers.set("x-user-id", String((payload as { id?: string }).id || ""));
    headers.set("x-user-role", String(role || ""));
    headers.set(
      "x-user-tenant",
      String((payload as { tenantId?: string | null }).tenantId || "")
    );

    return NextResponse.next({ request: { headers } });
  } catch {
    const res = NextResponse.next();
    res.cookies.delete(SESSION_COOKIE);
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
