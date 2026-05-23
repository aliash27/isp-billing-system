# Supabase Configuration Guide
# دليل إعداد Supabase

## 🇸🇦 بالعربية

### الخطوة 1: إنشاء حساب Supabase

1. اذهب إلى https://supabase.com
2. اضغط "Start your project"
3. سجل باستخدام GitHub أو البريد الإلكتروني
4. اختر الخطة المجانية (Free tier)

### الخطوة 2: إنشاء مشروع جديد

1. اضغط "New Project"
2. املأ البيانات:
   - **Organization:** اختر أو أنشئ منظمة
   - **Project name:** `isp-billing-system` (أو أي اسم تريده)
   - **Database Password:** كلمة مرور قوية (احتفظ بها!)
   - **Region:** اختر أقرب منطقة لك (مثلاً: Northeast Asia - Singapore)
3. اضغط "Create new project"
4. انتظر 2-3 دقائق حتى يكتمل إعداد المشروع

### الخطوة 3: الحصول على رابط قاعدة البيانات

1. في لوحة التحكم، اضغط على **Settings** (أيقونة الترس)
2. اختر **Database** من القائمة الجانبية
3. ابحث عن قسم **Connection string**
4. اختر **Connection mode:** `Transaction` (مهم!)
5. انسخ الرابط، سيبدو هكذا:

```
postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres
```

### الخطوة 4: إعداد متغيرات البيئة

1. انسخ ملف `.env.example` إلى `.env`:
```bash
cp .env.example .env
```

2. افتح `.env` وعدّل القيم:
```env
DATABASE_URL="postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres"
JWT_SECRET="your-secret-key-at-least-32-characters-long-change-me"
NODE_ENV="production"
ALLOW_SEED="1"
```

**ملاحظات مهمة:**
- استبدل `your-password` بكلمة مرور قاعدة البيانات
- استبدل `db.xxxxxx` بعنوان قاعدة البيانات الخاص بك
- غيّر `JWT_SECRET` إلى قيمة عشوائية قوية (32 حرف على الأقل)

### الخطوة 5: تطبيق المخطط وإضافة البيانات

```bash
# تثبيت المتطلبات
npm install

# تطبيق مخطط قاعدة البيانات
npx drizzle-kit push

# إضافة البيانات التجريبية
npx tsx seed.ts
```

### الخطوة 6: التحقق من العمل

```bash
# تشغيل التطبيق محلياً
npm run dev
```

افتح http://localhost:3000 وسجّل دخول بحساب تجريبي.

---

## 🇬🇧 In English

### Step 1: Create Supabase Account

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email
4. Choose the Free tier plan

### Step 2: Create New Project

1. Click "New Project"
2. Fill in the details:
   - **Organization:** Choose or create one
   - **Project name:** `isp-billing-system` (or any name you prefer)
   - **Database Password:** Strong password (save it!)
   - **Region:** Choose nearest region (e.g., Northeast Asia - Singapore)
3. Click "Create new project"
4. Wait 2-3 minutes for project setup

### Step 3: Get Database Connection String

1. In dashboard, click **Settings** (gear icon)
2. Select **Database** from sidebar
3. Find **Connection string** section
4. Choose **Connection mode:** `Transaction` (important!)
5. Copy the string, it looks like:

```
postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres
```

### Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Open `.env` and edit values:
```env
DATABASE_URL="postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres"
JWT_SECRET="your-secret-key-at-least-32-characters-long-change-me"
NODE_ENV="production"
ALLOW_SEED="1"
```

**Important notes:**
- Replace `your-password` with your database password
- Replace `db.xxxxxx` with your database host
- Change `JWT_SECRET` to a strong random value (32+ characters)

### Step 5: Apply Schema and Seed Data

```bash
# Install dependencies
npm install

# Apply database schema
npx drizzle-kit push

# Seed demo data
npx tsx seed.ts
```

### Step 6: Verify It Works

```bash
# Run locally
npm run dev
```

Open http://localhost:3000 and login with demo account.

---

## 🔧 Troubleshooting / حل المشاكل

### Error: "relation does not exist"
```bash
npx drizzle-kit push
```

### Error: "password authentication failed"
- Check your database password
- Make sure connection string is correct
- Verify connection mode is "Transaction"

### Error: "seed failed"
- Make sure schema is applied first
- Check database connection
- Try dropping tables and re-apply:
```bash
# في Supabase SQL Editor
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

# ثم
npx drizzle-kit push
npx tsx seed.ts
```

---

## 📊 Supabase Free Tier Limits

- **Database size:** 500 MB
- **Bandwidth:** 2 GB/month
- **Projects:** 2 active projects
- **Row count:** Unlimited

للاستخدام التجاري، يُنصح بالترقية إلى Pro plan ($25/month).
