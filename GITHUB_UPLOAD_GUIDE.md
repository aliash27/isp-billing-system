# 📤 دليل رفع المشروع إلى GitHub - خطوة بخطوة

## 🎯 **الطريقة الأولى: عبر المتصفح (الأسهل للمبتدئين)**

### **الخطوة 1: إنشاء حساب GitHub**

1. اذهب إلى: **https://github.com**
2. اضغط **"Sign up"** (أعلى اليمين)
3. أدخل:
   - **Email:** بريدك الإلكتروني
   - **Password:** كلمة مرور قوية
   - **Username:** اسم مستخدم (سيظهر في رابط مستودعك)
4. أكمل التسجيل وفعّل الحساب من بريدك

---

### **الخطوة 2: إنشاء مستودع جديد (Repository)**

1. بعد تسجيل الدخول، اضغط **"+"** في الأعلى ثم **"New repository"**

   أو اذهب مباشرة إلى: **https://github.com/new**

2. املأ البيانات:

```
Repository name:        isp-billing-system
Description:           ISP Billing & Subscription Management System
Visibility:            ● Public (عام)  أو  ○ Private (خاص)
Initialize this repository with:
  ☐ Add a README file
  ☐ Add .gitignore
  ☐ Choose a license
```

**ملاحظات:**
- اختر **Public** إذا كنت تريد أن يرى الجميع المشروع
- اختر **Private** إذا كنت تريد أن يكون خاصاً بك فقط
- **لا تضف** README أو .gitignore (لأنها موجودة بالفعل في الملف المضغوط)

3. اضغط **"Create repository"**

---

### **الخطوة 3: رفع الملفات**

#### **الطريقة أ: رفع ملف ZIP مباشرة (الأسهل)**

1. في صفحة المستودع الجديد، اضغط **"uploading an existing file"**

   أو اضغط **"Add file"** → **"Upload files"**

2. اسحب ملف `isp-billing-system.zip` إلى المنطقة المخصصة

   **أو**

   اضغط **"choose your files"** واختر الملف

3. في الأسفل، اكتب وصفاً:
```
Add project files
```

4. اضغط **"Commit changes"**

**⚠️ ملاحظة:** هذه الطريقة ترفع ملف ZIP فقط، وليس الملفات الفردية.

---

#### **الطريقة ب: رفع الملفات الفردية (الأفضل)**

**أولاً: فك ضغط الملف على جهازك**

```bash
# على Windows
# انقر بزر الماوس الأيمن على isp-billing-system.zip → "Extract All"

# على Mac/Linux
unzip isp-billing-system.zip
```

**ثانياً: رفع الملفات**

1. في صفحة المستودع، اضغط **"Add file"** → **"Upload files"**

2. اسحب **جميع الملفات والمجلدات** من المجلد المفكوك إلى المنطقة المخصصة

   **ملفات مهمة يجب رفعها:**
   ```
   ✅ src/ (المجلد كاملاً)
   ✅ public/ (إن وجد)
   ✅ package.json
   ✅ package-lock.json
   ✅ tsconfig.json
   ✅ next.config.ts
   ✅ drizzle.config.json
   ✅ netlify.toml
   ✅ .gitignore
   ✅ .env.example
   ✅ README.md
   ✅ QUICKSTART.md
   ✅ SUPABASE_SETUP.md
   ✅ NETLIFY_DEPLOY.md
   ✅ PROJECT_SUMMARY_AR.md
   ✅ seed.ts
   ```

   **ملفات لا ترفعها:**
   ```
   ❌ node_modules/ (سيتم تثبيته تلقائياً)
   ❌ .next/ (مخرجات البناء)
   ❌ .env (بيانات حساسة)
   ```

3. في الأسفل، اكتب وصفاً:
```
Initial commit - ISP Billing System
```

4. اضغط **"Commit changes"**

5. انتظر حتى تكتمل عملية الرفع (قد تستغرق 2-5 دقائق)

---

### **الخطوة 4: التحقق من الرفع**

1. بعد الرفع، ستظهر جميع الملفات في صفحة المستودع

2. تحقق من وجود:
   - ✅ `README.md` - يجب أن يظهر في الأسفل
   - ✅ `package.json` - يجب أن يكون موجوداً
   - ✅ `src/` - المجلد الرئيسي
   - ✅ `netlify.toml` - إعدادات Netlify

3. اضغط على `README.md` للتأكد من ظهور المحتوى

---

## 🎯 **الطريقة الثانية: عبر Git Command Line (للمحترفين)**

### **الخطوة 1: تثبيت Git**

**Windows:**
1. اذهب إلى: https://git-scm.com/download/win
2. حمّل وثبّت Git
3. افتح **Git Bash** أو **Command Prompt**

**Mac:**
```bash
# Git مثبت مسبقاً، تحقق منه:
git --version

# إذا لم يكن مثبتاً:
brew install git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

---

### **الخطوة 2: إعداد Git**

```bash
# إعداد الاسم والبريد (مرة واحدة فقط)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# التحقق من الإعدادات
git config --list
```

---

### **الخطوة 3: إنشاء مستودع على GitHub**

1. اذهب إلى: **https://github.com/new**
2. املأ البيانات:
   - **Repository name:** `isp-billing-system`
   - **Visibility:** Public أو Private
   - **لا تضف** README أو .gitignore
3. اضغط **"Create repository"**
4. **انسخ رابط المستودع** (سيظهر مثل):
   ```
   https://github.com/YOUR_USERNAME/isp-billing-system.git
   ```

---

### **الخطوة 4: فك الضغط وتهيئة Git**

```bash
# 1. فك ضغط الملف
unzip isp-billing-system.zip

# 2. الدخول إلى المجلد
cd isp-billing-system

# 3. تهيئة Git
git init

# 4. إضافة جميع الملفات
git add .

# 5. التحقق من الملفات المضافة
git status

# يجب أن ترى قائمة بجميع الملفات باللون الأخضر

# 6. إنشاء أول commit
git commit -m "Initial commit - ISP Billing System v1.0"

# 7. إعادة تسمية الفرع إلى main
git branch -M main
```

---

### **الخطوة 5: ربط المستودع المحلي بـ GitHub**

```bash
# إضافة المستودع البعيد (استبدل YOUR_USERNAME باسم حسابك)
git remote add origin https://github.com/YOUR_USERNAME/isp-billing-system.git

# التحقق من الربط
git remote -v

# يجب أن ترى:
# origin  https://github.com/YOUR_USERNAME/isp-billing-system.git (fetch)
# origin  https://github.com/YOUR_USERNAME/isp-billing-system.git (push)
```

---

### **الخطوة 6: رفع الملفات إلى GitHub**

```bash
# رفع الملفات
git push -u origin main
```

**عند طلب كلمة المرور:**

**الخيار أ: استخدام Personal Access Token (موصى به)**

1. اذهب إلى: https://github.com/settings/tokens
2. اضغط **"Generate new token"** → **"Generate new token (classic)"**
3. املأ:
   - **Note:** `isp-billing-system`
   - **Expiration:** 90 days (أو No expiration)
   - **Select scopes:** ✅ `repo` (كل الخيارات تحت repo)
4. اضغط **"Generate token"**
5. **انسخ التوكن** (لن يظهر مرة أخرى!)
6. استخدم التوكن ككلمة مرور عند طلبها

**الخيار ب: استخدام GitHub Desktop (الأسهل)**

1. حمّل GitHub Desktop من: https://desktop.github.com
2. ثبّت وسجّل دخول بحساب GitHub
3. اضغط **"Add"** → **"Add existing repository"**
4. اختر مجلد `isp-billing-system`
5. اضغط **"Publish repository"**
6. املأ البيانات واضغط **"Publish Repository"**

---

### **الخطوة 7: التحقق من الرفع**

1. اذهب إلى: `https://github.com/YOUR_USERNAME/isp-billing-system`
2. اضغط **F5** للتحديث
3. يجب أن ترى جميع الملفات

---

## 🔍 **التحقق من نجاح الرفع**

### **عبر المتصفح:**

1. اذهب إلى صفحة المستودع
2. تحقق من وجود:

```
✅ src/
   ├── app/
   ├── components/
   ├── db/
   └── lib/
✅ package.json
✅ package-lock.json
✅ netlify.toml
✅ README.md
✅ .env.example
✅ .gitignore
```

3. اضغط على `README.md` - يجب أن يظهر الدليل الشامل
4. تحقق من عدد الملفات (يجب أن يكون ~100 ملف)

---

## 🆘 **حل المشاكل الشائعة**

### **المشكلة 1: "Authentication failed"**

**الحل:**
```bash
# استخدم Personal Access Token بدلاً من كلمة المرور
# أو استخدم GitHub Desktop
```

---

### **المشكلة 2: "Updates were rejected"**

**السبب:** المستودع البعيد يحتوي على ملفات غير موجودة محلياً

**الحل:**
```bash
# اسحب التغييرات أولاً
git pull origin main --allow-unrelated-histories

# ثم ارفع
git push -u origin main
```

---

### **المشكلة 3: "File too large"**

**السبب:** محاولة رفع ملفات كبيرة (مثل node_modules)

**الحل:**
```bash
# تحقق من .gitignore
cat .gitignore

# يجب أن يحتوي على:
# node_modules/
# .next/
# .env

# إذا لم يكن موجوداً، أضفه:
echo "node_modules/" >> .gitignore
echo ".next/" >> .gitignore
echo ".env" >> .gitignore

# احذف الملفات من Git
git rm -r --cached node_modules
git rm -r --cached .next
git rm --cached .env

# commit و push
git add .gitignore
git commit -m "Update .gitignore"
git push
```

---

### **المشكلة 4: "Permission denied (publickey)"**

**الحل:** استخدم HTTPS بدلاً من SSH
```bash
# غيّر الرابط إلى HTTPS
git remote set-url origin https://github.com/YOUR_USERNAME/isp-billing-system.git

# ثم push
git push -u origin main
```

---

## 📊 **مقارنة الطريقتين**

| الميزة | المتصفح (Upload) | Git Command Line |
|--------|------------------|------------------|
| **السهولة** | ⭐⭐⭐⭐⭐ سهل جداً | ⭐⭐⭐ متوسط |
| **السرعة** | ⭐⭐⭐ بطيء (رفع ملف ملف) | ⭐⭐⭐⭐⭐ سريع |
| **التحكم** | ⭐⭐ محدود | ⭐⭐⭐⭐⭐ كامل |
| **للمبتدئين** | ✅ موصى به | ⚠️ يتطلب معرفة |
| **للمحترفين** | ❌ غير عملي | ✅ موصى به |

---

## 🎯 **التوصية**

### **للمبتدئين:**
استخدم **الطريقة الأولى (المتصفح)** - رفع الملفات الفردية

### **للمحترفين:**
استخدم **الطريقة الثانية (Git CLI)** - أسرع وأكثر تحكماً

### **الأسهل على الإطلاق:**
استخدم **GitHub Desktop** - واجهة رسومية بدون أوامر

---

## ✅ **بعد الرفع الناجح**

### **الخطوة التالية: النشر على Netlify**

1. اذهب إلى: https://www.netlify.com
2. سجّل دخول
3. اضغط **"Add new site"** → **"Import from GitHub"**
4. اختر مستودع `isp-billing-system`
5. أضف متغيرات البيئة:
   ```
   DATABASE_URL=postgresql://...
   JWT_SECRET=your-secret-key
   NODE_ENV=production
   ALLOW_SEED=1
   ```
6. اضغط **"Deploy"**

**للتفاصيل الكاملة:** راجع `NETLIFY_DEPLOY.md`

---

## 📞 **المساعدة**

إذا واجهت مشكلة:

1. راجع قسم **"حل المشاكل الشائعة"** أعلاه
2. ابحث في Google عن رسالة الخطأ
3. راجع وثائق GitHub: https://docs.github.com
4. افتح Issue في المستودع

---

## 🎓 **مفاهيم مهمة**

### **Repository (مستودع):**
مشروعك على GitHub، يحتوي على جميع الملفات

### **Commit:**
حفظ التغييرات في Git (مثل "Save" في Word)

### **Push:**
رفع التغييرات من جهازك إلى GitHub

### **Pull:**
تنزيل التغييرات من GitHub إلى جهازك

### **Branch:**
نسخة مستقلة من المشروع (main هو الفرع الرئيسي)

---

**✅ جاهز للرفع!**

اتبع الخطوات أعلاه، وخلال 5 دقائق سيكون مشروعك على GitHub! 🚀
