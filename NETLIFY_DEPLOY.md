# Netlify Deployment Guide
# دليل النشر على Netlify

## 🇸🇦 بالعربية

### المتطلبات الأساسية

قبل البدء، تأكد من:
- ✅ حساب GitHub مع المشروع مرفوع
- ✅ حساب Supabase مع قاعدة البيانات مُعدة
- ✅ حساب Netlify (مجاني)

### الخطوة 1: رفع المشروع إلى GitHub

```bash
# إنشاء ملف .gitignore
cat > .gitignore << 'EOF'
node_modules/
.next/
.env
.env.local
*.log
.DS_Store
EOF

# رفع المشروع
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/isp-billing-system.git
git push -u origin main
```

### الخطوة 2: إنشاء حساب Netlify

1. اذهب إلى https://www.netlify.com
2. اضغط "Sign up"
3. سجل باستخدام GitHub (أسهل طريقة)
4. أكمل التسجيل

### الخطوة 3: ربط المشروع

1. في لوحة التحكم، اضغط **"Add new site"**
2. اختر **"Import an existing project"**
3. اختر **GitHub**
4. ابحث عن `isp-billing-system` واضغط **"Configure Netlify"**
5. اسمح لـ Netlify بالوصول للمستودع

### الخطوة 4: إعدادات البناء

ستظهر صفحة الإعدادات:

**Basic build settings:**
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Base directory:** (اتركه فارغاً)

**Advanced build settings:**
- **Functions directory:** (اتركه فارغاً)

اضغط **"Advanced build settings"** وأضف:

**Environment variables:**
```
DATABASE_URL=postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres
JWT_SECRET=your-secret-key-at-least-32-characters-long
NODE_ENV=production
ALLOW_SEED=1
```

**Branch:** `main`

### الخطوة 5: إضافة Netlify Next.js Plugin

```bash
# محلياً
npm install -D @netlify/plugin-nextjs

# رفع التغييرات
git add package.json package-lock.json
git commit -m "Add Netlify plugin"
git push
```

### الخطوة 6: نشر الموقع

1. اضغط **"Deploy site"**
2. انتظر 2-5 دقائق حتى يكتمل البناء
3. ستحصل على رابط مثل: `https://isp-billing-system.netlify.app`

### الخطوة 7: تخصيص النطاق (اختياري)

**تغيير اسم الموقع:**
1. اذهب إلى **Site settings** → **Site details**
2. اضغط **"Change site name"**
3. اختر اسم جديد مثل: `my-isp-billing`
4. الرابط الجديد: `https://my-isp-billing.netlify.app`

**استخدام نطاق مخصص:**
1. اذهب إلى **Domain settings**
2. اضغط **"Add custom domain"**
3. أدخل نطاقك (مثلاً: `billing.yourdomain.com`)
4. أضف سجل DNS:
   - **Type:** CNAME
   - **Name:** billing
   - **Value:** your-site.netlify.app

---

## 🇬🇧 In English

### Prerequisites

Before starting, ensure:
- ✅ GitHub account with project pushed
- ✅ Supabase account with database configured
- ✅ Netlify account (free)

### Step 1: Push Project to GitHub

```bash
# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
.next/
.env
.env.local
*.log
.DS_Store
EOF

# Push project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/isp-billing-system.git
git push -u origin main
```

### Step 2: Create Netlify Account

1. Go to https://www.netlify.com
2. Click "Sign up"
3. Sign up with GitHub (easiest)
4. Complete registration

### Step 3: Connect Project

1. In dashboard, click **"Add new site"**
2. Choose **"Import an existing project"**
3. Select **GitHub**
4. Find `isp-billing-system` and click **"Configure Netlify"**
5. Allow Netlify to access repository

### Step 4: Build Settings

Configuration page will appear:

**Basic build settings:**
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Base directory:** (leave empty)

**Advanced build settings:**
- **Functions directory:** (leave empty)

Click **"Advanced build settings"** and add:

**Environment variables:**
```
DATABASE_URL=postgresql://postgres:your-password@db.xxxxxx.supabase.co:5432/postgres
JWT_SECRET=your-secret-key-at-least-32-characters-long
NODE_ENV=production
ALLOW_SEED=1
```

**Branch:** `main`

### Step 5: Add Netlify Next.js Plugin

```bash
# Locally
npm install -D @netlify/plugin-nextjs

# Push changes
git add package.json package-lock.json
git commit -m "Add Netlify plugin"
git push
```

### Step 6: Deploy Site

1. Click **"Deploy site"**
2. Wait 2-5 minutes for build
3. You'll get URL like: `https://isp-billing-system.netlify.app`

### Step 7: Customize Domain (Optional)

**Change site name:**
1. Go to **Site settings** → **Site details**
2. Click **"Change site name"**
3. Choose new name like: `my-isp-billing`
4. New URL: `https://my-isp-billing.netlify.app`

**Use custom domain:**
1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `billing.yourdomain.com`)
4. Add DNS record:
   - **Type:** CNAME
   - **Name:** billing
   - **Value:** your-site.netlify.app

---

## 🔧 Troubleshooting / حل المشاكل

### Build fails with "Cannot find module"
```bash
# Clear Netlify cache
# Go to Deploys → Trigger deploy → Clear cache and deploy site
```

### Database connection error
- Check `DATABASE_URL` in environment variables
- Ensure Supabase allows connections from Netlify IPs
- Verify connection string is correct

### "Module not found" errors
```bash
# Locally
rm -rf node_modules .next
npm install
npm run build
git add package-lock.json
git commit -m "Fix dependencies"
git push
```

### Site shows "Page not found"
- Check publish directory is `.next`
- Ensure `netlify.toml` exists
- Verify build completed successfully

---

## 📊 Netlify Free Tier Limits

- **Bandwidth:** 100 GB/month
- **Build minutes:** 300 minutes/month
- **Serverless functions:** 125K requests/month
- **Forms:** 100 submissions/month
- **Identity:** 1,000 active users

للاستخدام التجاري، يُنصح بالترقية إلى Pro plan ($19/month).

---

## 🔄 Auto-Deploy on Push

كل مرة تدفع تغييرات إلى GitHub، Netlify سيقوم تلقائياً بإعادة النشر:

```bash
git add .
git commit -m "Your changes"
git push
# Netlify will auto-deploy in ~2-5 minutes
```

---

## 📝 Environment Variables in Netlify

لتغيير متغيرات البيئة:

1. اذهب إلى **Site settings** → **Environment variables**
2. اضغط **"Add variable"**
3. أدخل الاسم والقيمة
4. اضغط **"Save"**
5. أعد نشر الموقع: **Deploys** → **Trigger deploy** → **Deploy site**

---

## 🎯 Post-Deployment Checklist

بعد النشر، تحقق من:

- [ ] الموقع يعمل على الرابط
- [ ] يمكن تسجيل الدخول بحساب تجريبي
- [ ] قاعدة البيانات متصلة
- [ ] الإيصالات تُطبع بشكل صحيح
- [ ] PDF يُحمّل بشكل صحيح
- [ ] الوضع الداكن/الفاتح يعمل
- [ ] العربية/الإنجليزية تعمل
