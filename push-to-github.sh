#!/bin/bash

# Quick GitHub Push Script
# Run this after creating your GitHub repository

echo "🚀 Quick Push to GitHub"
echo "======================="
echo ""
echo "Make sure you've created the repository on GitHub first!"
echo "Repository URL should be: https://github.com/YOUR_USERNAME/tekbay-academy"
echo ""
read -p "Have you created the GitHub repo? (y/n): " created

if [ "$created" != "y" ]; then
    echo ""
    echo "Please create the repository first:"
    echo "1. Go to https://github.com/new"
    echo "2. Name: tekbay-academy"
    echo "3. Select 'Private'"
    echo "4. Click 'Create repository'"
    echo ""
    echo "Then run this script again!"
    exit 1
fi

echo ""
read -p "Enter your GitHub username: " username

echo ""
echo "📦 Adding all files..."
git add .

echo "✅ Files added"
echo ""

echo "💬 Creating commit..."
git commit -m "Initial commit: TekBay Cloud Apprenticeship Landing Page

Features:
- React + TypeScript setup
- 7 responsive sections
- TekBay brand colors (#201d3f, #f0f2f2, #c7cce5, #464d82, #a99673)
- Nunito typography
- GitHub Actions CI/CD
- Automatic deployment to GitHub Pages"

echo "✅ Commit created"
echo ""

echo "🌿 Setting main branch..."
git branch -M main

echo "✅ Branch set to main"
echo ""

echo "🔗 Adding remote..."
git remote add origin "https://github.com/$username/tekbay-landing-page.git" 2>/dev/null || git remote set-url origin "https://github.com/$username/tekbay-landing-page.git"

echo "✅ Remote added"
echo ""

echo "🚀 Pushing to GitHub..."
echo ""
echo "⚠️  You'll be asked for:"
echo "   Username: $username"
echo "   Password: Use your Personal Access Token (NOT your password)"
echo ""
echo "If you don't have a token:"
echo "1. Go to https://github.com/settings/tokens"
echo "2. Generate new token (classic)"
echo "3. Select: repo, workflow"
echo "4. Copy the token and use it as password"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "=============="
    echo ""
    echo "1. Enable GitHub Pages:"
    echo "   - Go to: https://github.com/$username/tekbay-landing-page/settings/pages"
    echo "   - Source: Deploy from branch"
    echo "   - Branch: gh-pages (will appear after first Actions run)"
    echo "   - Click Save"
    echo ""
    echo "2. Wait 2-3 minutes for GitHub Actions to build and deploy"
    echo ""
    echo "3. Your site will be live at:"
    echo "   https://$username.github.io/tekbay-landing-page/"
    echo ""
    echo "4. Check deployment status:"
    echo "   https://github.com/$username/tekbay-landing-page/actions"
    echo ""
else
    echo ""
    echo "❌ Push failed!"
    echo ""
    echo "Common issues:"
    echo "1. Wrong username or token"
    echo "2. Repository doesn't exist on GitHub"
    echo "3. No internet connection"
    echo ""
    echo "Try again or check: GITHUB_CICD_GUIDE.md"
fi
