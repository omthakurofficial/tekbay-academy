# TekBay Cloud Apprenticeship Landing Page

[![Deploy Status](https://github.com/YOUR_USERNAME/tekbay-academy/workflows/Deploy%20TekBay%20Academy/badge.svg)](https://github.com/YOUR_USERNAME/tekbay-academy/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive landing page for TekBay's AWS Cloud Apprenticeship Program built with React and TypeScript.

## 🌐 Live Demo

- **GitHub Pages:** https://YOUR_USERNAME.github.io/tekbay-academy/
- **Local Development:** http://localhost:3000

## ✨ Features

This landing page showcases TekBay's Cloud Apprenticeship Program with:
- **8-week AWS certification program**
- **100% refund on certification**
- **Limited time offer: ₹9,997** (Originally ₹20,000)
- Hands-on training from certified AWS experts

## 🎨 Design Specifications

### Color Palette
- **Primary Dark Blue**: `#201d3f` - Main text and header backgrounds
- **Light Grey**: `#f0f2f2` - Background color
- **Lavender**: `#c7cce5` - Accent sections
- **Midnight Blue**: `#464d82` - Primary brand color
- **Beige**: `#a99673` - Secondary brand color

### Typography
- **Font**: Nunito (Google Fonts)
- **Weights**: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Tracking**: 
  - Titles: -40 (tighter)
  - Body: -20 (slightly tighter)

## 📁 Project Structure

```
TekBay/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-students.jpg
│   │   ├── instructor-rojan.jpg
│   │   ├── instructor-om.jpg
│   │   └── student-macbook.jpg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.css
│   │   ├── ProgramOverview/
│   │   │   ├── ProgramOverview.tsx
│   │   │   └── ProgramOverview.css
│   │   ├── Benefits/
│   │   │   ├── Benefits.tsx
│   │   │   └── Benefits.css
│   │   ├── Pricing/
│   │   │   ├── Pricing.tsx
│   │   │   └── Pricing.css
│   │   ├── Demand/
│   │   │   ├── Demand.tsx
│   │   │   └── Demand.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.css
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## 🖼️ Required Images

Place the following images in the `public/images/` folder:

1. **logo.png** - TekBay logo (anchor with circuit board design)
2. **hero-students.jpg** - Group of happy students (from your flyer page 1)
3. **instructor-rojan.jpg** - Rojan Sedhai photo
4. **instructor-om.jpg** - Om Prakash Thakur photo
5. **student-macbook.jpg** - Student with MacBook (from your flyer page 2)

### Image Specifications
- Logo: Transparent PNG, 200x200px minimum
- Photos: JPG format, 1920px width recommended
- Optimize images for web (compress without losing quality)

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
1. Create the `public/images/` folder if it doesn't exist
2. Add all required images (see list above)
3. Ensure image filenames match exactly

### Step 3: Start Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎯 Page Sections

### 1. Header
- TekBay logo and navigation
- Sticky header with smooth scroll

### 2. Hero Section
- Main headline: "Learn Cloud, Build Your Future"
- Subheadline: "From Zero to AWS Certified Cloud Hero in Just 8 Weeks!"
- Hero image with students

### 3. Program Overview
- Program description
- Target audience

### 4. Benefits Section
- 45+ hours of guided learning
- AWS certification
- Career placement opportunities
- Real-world cloud projects
- Certified cloud experts
- Instructor profiles (Rojan Sedhai & Om Prakash Thakur)
- Success stats (250+ students, 40% working in leading tech)

### 5. Pricing Section
- 100% Refund offer
- Pricing: ₹20,000 → ₹9,997
- MacBook prize opportunity
- Four key program features

### 6. Demand Section
- Cloud market statistics
- AWS certification benefits
- Entry-level salary info (₹18 LPA)
- TekBay's unique approach

### 7. Footer
- Contact information: apprentice@tekbay.digital
- Call-to-action button
- Copyright information

## 🎨 Customization

### Changing Colors
Edit `src/styles/global.css` and update CSS variables:

```css
:root {
  --color-primary-dark: #201d3f;
  --color-primary-light: #f0f2f2;
  --color-primary-lavender: #c7cce5;
  --color-secondary-blue: #464d82;
  --color-secondary-beige: #a99673;
}
```

### Updating Content
Each component has its own file. Edit the content in:
- `src/components/Hero/Hero.tsx`
- `src/components/Benefits/Benefits.tsx`
- `src/components/Pricing/Pricing.tsx`
- etc.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔗 Contact

For more information:
- Email: apprentice@tekbay.digital
- Website: [Your website URL]

## 📄 License

© 2025 TekBay. All rights reserved.

---

**Built with ❤️ using React + TypeScript**
# tekbay-academy
