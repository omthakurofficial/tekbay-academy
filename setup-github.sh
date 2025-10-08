#!/bin/bash

# TekBay Landing Page - GitHub Setup Script
# This script helps you push your project to GitHub

echo "🚀 TekBay Landing Page - GitHub Setup"
echo "======================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed!"
    echo "   Install it with: sudo apt install git"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if already initialized
if [ -d ".git" ]; then
    echo "⚠️  Git repository already initialized"
    echo ""
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Configure git user (if not set)
if [ -z "$(git config user.name)" ]; then
    echo "⚙️  Let's configure Git..."
    read -p "Enter your name: " user_name
    read -p "Enter your email: " user_email
    
    git config user.name "$user_name"
    git config user.email "$user_email"
    
    echo "✅ Git configured"
    echo ""
fi

# Show current git config
echo "📋 Current Git Configuration:"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo ""

# Ask for GitHub username
read -p "Enter your GitHub username: " github_username
echo ""

# Set remote origin
REPO_URL="https://github.com/$github_username/tekbay-academy.git"

if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists"
    echo "   Current: $(git remote get-url origin)"
    read -p "Update to $REPO_URL? (y/n): " update_remote
    if [ "$update_remote" = "y" ]; then
        git remote set-url origin "$REPO_URL"
        echo "✅ Remote updated"
    fi
else
    git remote add origin "$REPO_URL"
    echo "✅ Remote origin added: $REPO_URL"
fi

echo ""
echo "📝 Next Steps:"
echo "======================================"
echo ""
echo "1. Create GitHub Repository:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: tekbay-academy"
echo "   - Select 'Private'"
echo "   - DO NOT initialize with README"
echo "   - Click 'Create repository'"
echo ""
echo "2. Then run these commands:"
echo ""
echo "   git add ."
echo "   git commit -m 'Initial commit: TekBay Landing Page'"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. You'll need a GitHub Personal Access Token:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Generate new token (classic)"
echo "   - Select 'repo' and 'workflow' scopes"
echo "   - Use the token as password when pushing"
echo ""
echo "4. Enable GitHub Pages (after first push):"
echo "   - Go to repository Settings → Pages"
echo "   - Source: gh-pages branch"
echo "   - Your site will be at:"
echo "   https://$github_username.github.io/tekbay-academy/"
echo ""
echo "🎉 Setup complete! Follow the steps above."
echo ""
