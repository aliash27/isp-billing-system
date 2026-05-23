import "dotenv/config";
import { seedDatabase } from "./src/lib/seed";

async function main() {
  console.log("🌱 Seeding database...");
  const res = await seedDatabase();
  console.log("✅ Seed complete:", res);
  process.exit(0);
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
