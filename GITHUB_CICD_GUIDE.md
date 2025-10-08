# GitHub & CI/CD Setup Guide for TekBay Landing Page

## 📋 Prerequisites

- Git installed on your system
- GitHub account (create at https://github.com if you don't have one)

---

## 🎯 Step 1: Create GitHub Repository

### Option A: Via GitHub Website (Recommended for beginners)

1. **Go to GitHub:**
   - Visit: https://github.com
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

2. **Repository Settings:**
   - **Repository name:** `tekbay-academy`
   - **Description:** `TekBay Cloud Apprenticeship Program Landing Page`
   - **Visibility:** Select **Private**
   - ⚠️ **DO NOT** check "Initialize with README" (we already have files)
   - Click **"Create repository"**

3. **Copy the repository URL:**
   - You'll see: `https://github.com/YOUR_USERNAME/tekbay-academy.git`
   - Keep this URL handy!

### Option B: Via GitHub CLI (Advanced)

```bash
# Install GitHub CLI first if not installed
# Then run:
gh repo create tekbay-academy --private --source=. --remote=origin
```

---

## 🎯 Step 2: Initialize Git & Push to GitHub

Open your terminal in the TekBay project folder and run these commands:

### 2.1 Initialize Git Repository

```bash
cd /home/om/Documents/TekBay
git init
```

### 2.2 Configure Git (if first time)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2.3 Add All Files

```bash
git add .
```

### 2.4 Create First Commit

```bash
git commit -m "Initial commit: TekBay Landing Page with React + TypeScript"
```

### 2.5 Add Remote Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tekbay-academy.git
```

### 2.6 Rename Branch to Main

```bash
git branch -M main
```

### 2.7 Push to GitHub

```bash
git push -u origin main
```

You'll be asked for GitHub credentials. Use your GitHub username and **Personal Access Token** (not password).

---

## 🎯 Step 3: Create GitHub Personal Access Token

If you don't have a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `TekBay Deployment`
4. Select scopes:
   - ✅ `repo` (all)
   - ✅ `workflow`
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token instead of password when pushing

---

## 🎯 Step 4: Set Up CI/CD with GitHub Actions

CI/CD (Continuous Integration/Continuous Deployment) is already configured!

The `.github/workflows/deploy.yml` file will:
- ✅ Automatically build your site when you push code
- ✅ Run tests and checks
- ✅ Deploy to GitHub Pages automatically

---

## 🎯 Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **"Save"**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/tekbay-academy/
```

---

## 🎯 Step 6: Configure Homepage in package.json

Update your package.json with your GitHub username:

```json
{
  "name": "tekbay-academy",
  "version": "1.0.0",
  "homepage": "https://YOUR_USERNAME.github.io/tekbay-academy",
  ...
}
```

Then commit and push:

```bash
git add package.json
git commit -m "Add GitHub Pages homepage"
git push
```

---

## 🔄 Daily Workflow (After Initial Setup)

Every time you make changes:

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with a message
git commit -m "Update: describe your changes here"

# 4. Push to GitHub
git push

# 5. GitHub Actions will automatically:
#    - Build the site
#    - Run tests
#    - Deploy to GitHub Pages
#    - Site updates in 2-3 minutes!
```

---

## 🚀 Alternative Deployment Options

### Option 1: Netlify (Recommended - Super Easy!)

1. **Sign up at:** https://netlify.com
2. **Click:** "Add new site" → "Import an existing project"
3. **Connect GitHub:** Select your `tekbay-academy` repo
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
5. **Click:** "Deploy site"
6. **Custom domain:** You can add your own domain for free!

**Advantages:**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Preview deployments for pull requests
- ✅ Faster than GitHub Pages

### Option 2: Vercel (Also Great!)

1. **Sign up at:** https://vercel.com
2. **Click:** "Add New..." → "Project"
3. **Import:** Your GitHub repository
4. **Framework:** Vercel auto-detects React
5. **Click:** "Deploy"

**Advantages:**
- ✅ Instant deployments
- ✅ Free SSL
- ✅ Automatic preview URLs
- ✅ Built-in analytics

### Option 3: GitHub Pages (Free)

Already covered above! Perfect for static sites.

---

## 📊 CI/CD Features Included

Your GitHub Actions workflow includes:

✅ **Automated Building**
- Installs dependencies
- Builds production-ready code
- Optimizes for performance

✅ **Quality Checks**
- Runs TypeScript compiler
- Checks for errors
- Validates build process

✅ **Automatic Deployment**
- Deploys to GitHub Pages
- Updates site automatically
- No manual work needed!

✅ **Build Status Badge**
- Shows if build is passing
- Visible in README

---

## 🛠️ Useful Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

---

## 🔐 Security Best Practices

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - Database credentials
   - Add them to `.gitignore`

2. **Use environment variables:**
   - Store secrets in GitHub Secrets
   - Access via `process.env.REACT_APP_*`

3. **Review `.gitignore`:**
   - Ensure `node_modules/` is ignored
   - Ensure `.env` files are ignored

---

## 📧 Support

If you need help:
1. Check GitHub Actions tab for build logs
2. Review deployment logs
3. Contact: apprentice@tekbay.digital

---

## 🎉 You're All Set!

Your TekBay landing page now has:
- ✅ Version control with Git
- ✅ Cloud backup on GitHub
- ✅ Automatic CI/CD pipeline
- ✅ Free hosting options
- ✅ Professional deployment workflow

**Next push will automatically deploy your site! 🚀**
