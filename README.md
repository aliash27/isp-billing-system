# ISP Billing & Subscription Management System
# نظام فوترة وفواتير مزودي الإنترنت

## 📋 معلومات المشروع / Project Information

**اسم المشروع / Project Name:** `isp-billing-system`

**الوصف / Description:**
نظام متكامل متعدد المستأجرين لإدارة اشتراكات مزودي الإنترنت، تحصيل المدفوعات، ومتابعة الديون.

Multi-tenant SaaS system for ISP subscription management, payment collection, and debt tracking.

---

## 🚀 النشر السريع / Quick Deployment

### 1️⃣ إنشاء حساب GitHub ورفع المشروع

```bash
# إنشاء ملف ZIP
zip -r isp-billing-system.zip . -x "node_modules/*" ".next/*" ".git/*"

# أو استخدام Git مباشرة
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/isp-billing-system.git
git push -u origin main
```

### 2️⃣ إعداد Supabase (قاعدة البيانات)

1. **إنشاء حساب Supabase:**
   - اذهب إلى: https://supabase.com
   - سجل حساب مجاني
   - أنشئ مشروع جديد (Create New Project)

2. **الحصول على بيانات الاتصال:**
   - اذهب إلى: Settings → Database
   - انسخ **Connection String** (اختر "Transaction" mode)
   - الشكل: `postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres`

3. **تشغيل قاعدة البيانات:**
```bash
# تثبيت المتطلبات
npm install

# إعداد متغيرات البيئة
cp .env.example .env
# عدّل ملف .env وأضف رابط Supabase

# تطبيق المخطط
npx drizzle-kit push

# إضافة البيانات التجريبية
npx tsx seed.ts
```

### 3️⃣ النشر على Netlify

1. **إنشاء حساب Netlify:**
   - اذهب إلى: https://www.netlify.com
   - سجل حساب مجاني

2. **ربط المشروع:**
   - اختر "Add new site" → "Import an existing project"
   - اختر GitHub واختر مستودع `isp-billing-system`

3. **إعدادات البناء:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** `18.x` أو أحدث

4. **إضافة متغيرات البيئة في Netlify:**
   - اذهب إلى: Site settings → Environment variables
   - أضف المتغيرات التالية:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres
JWT_SECRET=your-secret-key-at-least-32-characters-long
NODE_ENV=production
ALLOW_SEED=1
```

5. **نشر الموقع:**
   - اضغط "Deploy site"
   - انتظر حتى اكتمال البناء (2-5 دقائق)

---

## 🔐 حسابات الدخول التجريبية / Demo Accounts

| الدور | البريد الإلكتروني | كلمة المرور |
|--------|-------------------|-------------|
| Super Admin | `super@isp.local` | `admin123` |
| Admin | `admin@demo-net.local` | `admin123` |
| Accountant | `accountant@demo-net.local` | `admin123` |

---

## 📦 الملفات المهمة / Important Files

### ملفات التكوين / Configuration Files
- `netlify.toml` - إعدادات Netlify
- `.env.example` - مثال لمتغيرات البيئة
- `drizzle.config.json` - إعدادات قاعدة البيانات

### الملفات الرئيسية / Core Files
- `src/db/schema.ts` - مخطط قاعدة البيانات
- `src/lib/seed.ts` - سكريبت البيانات التجريبية
- `src/middleware.ts` - حماية المسارات
- `src/app/actions.ts` - عمليات الخادم

---

## 🌐 متغيرات البيئة / Environment Variables

انسخ `.env.example` إلى `.env` وعدّل القيم:

```bash
# رابط قاعدة بيانات Supabase
DATABASE_URL="postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres"

# مفتاح JWT للتشفير (يجب أن يكون 32 حرف على الأقل)
JWT_SECRET="your-super-secret-key-change-this-in-production"

# بيئة التشغيل
NODE_ENV="production"

# السماح بتشغيل seed في الإنتاج (اختياري)
ALLOW_SEED="1"
```

---

## 🔧 الأوامر المتاحة / Available Commands

```bash
# التطوير المحلي
npm run dev              # تشغيل خادم التطوير

# البناء
npm run build            # بناء المشروع للإنتاج
npm run start            # تشغيل خادم الإنتاج

# قاعدة البيانات
npx drizzle-kit push     # تطبيق المخطط
npx tsx seed.ts          # إضافة البيانات التجريبية

# التحقق
npm run typecheck        # فحص TypeScript
npm run lint             # فحص الكود
```

---

## 📱 المميزات / Features

### ✅ تم التنفيذ / Implemented
- ✅ نظام متعدد المستأجرين (Multi-tenant)
- ✅ 3 أدوار (Super Admin, Admin, Accountant)
- ✅ دعم كامل للعربية والإنجليزية
- ✅ وضع داكن/فاتح (Dark/Light mode)
- ✅ دعم RTL للعربية
- ✅ لوحة تحكم مع إحصائيات ورسوم بيانية
- ✅ إدارة المشتركين (CRUD)
- ✅ تحصيل المدفوعات وإصدار الإيصالات
- ✅ تصدير PDF للإيصالات
- ✅ طباعة الإيصالات
- ✅ إدارة الديون
- ✅ 6 أنواع من التقارير
- ✅ إدارة الاشتراكات (شهري، ربع سنوي، نصف سنوي، سنوي)
- ✅ قفل الحسابات المنتهية
- ✅ سجل التدقيق (Audit Log)
- ✅ تصميم متجاوب (Responsive)
- ✅ رسوم متحركة سلسة

---

## 🛠️ التقنيات المستخدمة / Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Backend:** Next.js App Router, Server Actions
- **Database:** PostgreSQL, Drizzle ORM
- **Authentication:** JWT (jose), bcrypt
- **Charts:** Recharts
- **PDF:** jsPDF, jspdf-autotable
- **Icons:** Lucide React
- **Deployment:** Netlify, Supabase

---

## 📞 الدعم / Support

للأسئلة أو المشاكل، يرجى فتح Issue على GitHub.

---

## 📄 الترخيص / License

MIT License - свободен للاستخدام والتعديل.
