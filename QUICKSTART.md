# 🚀 دليل البدء السريع / Quick Start Guide

## 📦 اسم المشروع: `isp-billing-system`

---

## ⚡ الخطوات السريعة (5 دقائق)

### 1️⃣ رفع المشروع إلى GitHub

```bash
# إذا كنت تستخدم الملف المضغوط
unzip isp-billing-system.zip
cd isp-billing-system

# رفع إلى GitHub
git init
git add .
git commit -m "Initial commit - ISP Billing System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/isp-billing-system.git
git push -u origin main
```

**استبدل** `YOUR_USERNAME` باسم حسابك على GitHub

---

### 2️⃣ إعداد Supabase (قاعدة البيانات)

1. **إنشاء حساب:** https://supabase.com (مجاني)
2. **إنشاء مشروع جديد:**
   - اسم المشروع: `isp-billing-system`
   - كلمة مرور قوية (احتفظ بها!)
   - المنطقة: اختر الأقرب لك
3. **الحصول على رابط الاتصال:**
   - Settings → Database → Connection string
   - اختر: **Transaction mode**
   - انسخ الرابط
4. **إضافة إلى Netlify** (في الخطوة التالية)

---

### 3️⃣ النشر على Netlify

1. **إنشاء حساب:** https://www.netlify.com (مجاني)
2. **ربط المشروع:**
   - Add new site → Import from GitHub
   - اختر `isp-billing-system`
3. **إعدادات البناء:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```
4. **متغيرات البيئة** (مهم جداً!):
   ```
   DATABASE_URL=postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres
   JWT_SECRET=your-secret-key-at-least-32-characters-long
   NODE_ENV=production
   ALLOW_SEED=1
   ```
5. **نشر الموقع:**
   - اضغط Deploy
   - انتظر 2-5 دقائق
   - ستحصل على رابط مثل: `https://isp-billing-system.netlify.app`

---

### 4️⃣ إعداد قاعدة البيانات

بعد النشر الأول، قم بتشغيل هذه الأوامر محلياً لتطبيق المخطط:

```bash
# إنشاء ملف .env
cp .env.example .env

# عدّل .env وأضف رابط Supabase

# تثبيت المتطلبات
npm install

# تطبيق المخطط
npx drizzle-kit push

# إضافة البيانات التجريبية
npx tsx seed.ts
```

---

### 5️⃣ تسجيل الدخول

افتح الموقع وسجّل دخول بأحد الحسابات التجريبية:

| الدور | البريد | كلمة المرور |
|--------|---------|-------------|
| **Super Admin** | `super@isp.local` | `admin123` |
| **Admin** | `admin@demo-net.local` | `admin123` |
| **Accountant** | `accountant@demo-net.local` | `admin123` |

---

## 📚 الوثائق الكاملة

- **README.md** - دليل شامل بالعربية والإنجليزية
- **SUPABASE_SETUP.md** - دليل إعداد Supabase بالتفصيل
- **NETLIFY_DEPLOY.md** - دليل النشر على Netlify بالتفصيل
- **PROJECT_SUMMARY_AR.md** - ملخص المشروع والمميزات

---

## 🔧 الأوامر المهمة

```bash
# التطوير المحلي
npm run dev

# البناء للإنتاج
npm run build

# تطبيق مخطط قاعدة البيانات
npx drizzle-kit push

# إضافة بيانات تجريبية
npx tsx seed.ts

# فحص TypeScript
npm run typecheck
```

---

## ✅ قائمة التحقق

قبل النشر، تأكد من:

- [ ] ملف `.env` يحتوي على `DATABASE_URL` صحيح
- [ ] `JWT_SECRET` قوي (32+ حرف)
- [ ] قاعدة البيانات مُعدة على Supabase
- [ ] المخطط مُطبّق (`npx drizzle-kit push`)
- [ ] البيانات التجريبية مُضافة (`npx tsx seed.ts`)
- [ ] البناء ينجح محلياً (`npm run build`)

---

## 🆘 حل المشاكل

### ❌ "relation does not exist"
```bash
npx drizzle-kit push
```

### ❌ "password authentication failed"
- تحقق من `DATABASE_URL` في `.env`
- تأكد من كلمة مرور Supabase صحيحة

### ❌ Build fails on Netlify
- تحقق من متغيرات البيئة في Netlify
- تأكد من `DATABASE_URL` صحيح
- راجع سجلات البناء في Netlify

### ❌ "Cannot find module"
```bash
rm -rf node_modules .next
npm install
npm run build
```

---

## 📞 الدعم

للمزيد من المساعدة:
1. راجع الوثائق في `README.md`
2. راجع `SUPABASE_SETUP.md` لقاعدة البيانات
3. راجع `NETLIFY_DEPLOY.md` للنشر
4. راجع `PROJECT_SUMMARY_AR.md` للمميزات

---

## 🎯 ملخص سريع

**اسم المشروع:** `isp-billing-system`

**التقنيات:**
- Next.js 16 + React 19 + TypeScript
- PostgreSQL + Drizzle ORM
- Tailwind CSS + Recharts
- JWT Authentication

**الاستضافة:**
- Frontend: Netlify (مجاني)
- Database: Supabase (مجاني)

**الأدوار:**
- Super Admin (إدارة كاملة)
- Admin (إدارة الشركة)
- Accountant (تحصيل المدفوعات)

**المميزات:**
- ✅ متعدد المستأجرين
- ✅ عربي/إنجليزي
- ✅ داكن/فاتح
- ✅ PDF + طباعة
- ✅ تقارير متقدمة
- ✅ إدارة الديون

---

**جاهز للنشر! 🚀**
