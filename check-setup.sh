#!/bin/bash

# TekBay Landing Page - Quick Start Script
# Run this script to check if everything is set up correctly

echo "🚀 TekBay Landing Page - Setup Checker"
echo "========================================"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "❌ Dependencies not installed"
    echo "   Run: npm install"
    exit 1
fi

# Check if images directory exists
if [ -d "public/images" ]; then
    echo "✅ Images directory exists"
else
    echo "⚠️  Images directory not found"
    echo "   Creating public/images directory..."
    mkdir -p public/images
    echo "   ✅ Created!"
fi

# Check for required images
echo ""
echo "📸 Checking for required images..."
echo "-----------------------------------"

images=("logo.png" "hero-students.jpg" "instructor-rojan.jpg" "instructor-om.jpg" "student-macbook.jpg")
missing=0

for img in "${images[@]}"; do
    if [ -f "public/images/$img" ]; then
        echo "✅ $img found"
    else
        echo "❌ $img missing"
        ((missing++))
    fi
done

echo ""
if [ $missing -eq 0 ]; then
    echo "🎉 All images are in place!"
else
    echo "⚠️  $missing image(s) missing"
    echo ""
    echo "👉 Please add the missing images to public/images/"
    echo "👉 Open IMAGE_SETUP.html in your browser for help"
fi

echo ""
echo "📝 Next Steps:"
echo "-----------------------------------"
if [ $missing -gt 0 ]; then
    echo "1. Add missing images to public/images/"
    echo "2. Run: npm start"
else
    echo "1. Run: npm start"
    echo "2. Open: http://localhost:3000"
fi

echo ""
echo "📚 Documentation:"
echo "-----------------------------------"
echo "- README.md          - Full documentation"
echo "- SETUP.md           - Quick setup guide"
echo "- DESIGN_GUIDE.md    - Color & design specs"
echo "- IMAGE_SETUP.html   - Visual image guide"
echo "- PROJECT_SUMMARY.md - Complete overview"

echo ""
echo "✨ Ready to launch your TekBay landing page!"
echo ""
