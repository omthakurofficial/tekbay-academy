# 🚀 Quick Setup Instructions

## Step-by-Step Setup Guide

### 1️⃣ Install Node.js Dependencies

Open terminal in this directory and run:

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- TypeScript 5.0.0
- React Scripts (Create React App)

### 2️⃣ Add Your Images

**IMPORTANT**: You need to add these images to `public/images/` folder:

1. **logo.png** - Your TekBay logo
2. **hero-students.jpg** - The group photo from page 1 of your flyer
3. **instructor-rojan.jpg** - Photo of Rojan Sedhai
4. **instructor-om.jpg** - Photo of Om Prakash Thakur  
5. **student-macbook.jpg** - Student with laptop from page 2

**Image Location:**
```
public/
  └── images/
      ├── logo.png
      ├── hero-students.jpg
      ├── instructor-rojan.jpg
      ├── instructor-om.jpg
      └── student-macbook.jpg
```

**How to extract images from your files:**
- You can screenshot and crop from the JPG files you provided
- Or use the original high-res images if you have them
- Recommended sizes:
  - Logo: 200x200px (PNG with transparency)
  - Photos: 1920px width (JPG, optimized for web)

### 3️⃣ Start the Development Server

```bash
npm start
```

The browser will automatically open at: http://localhost:3000

### 4️⃣ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 🎨 Customization

### To Change Text Content:
- Edit the component files in `src/components/`
- Each section has its own folder with `.tsx` and `.css` files

### To Change Colors:
- Open `src/styles/global.css`
- Modify the CSS variables under `:root`

### To Change Fonts:
- Font is already set to Nunito via Google Fonts in `public/index.html`
- To use a different font, update the Google Fonts link

## 📁 What's Already Done

✅ Complete React + TypeScript setup
✅ All 7 page sections built:
   - Header (with sticky navigation)
   - Hero (main banner)
   - Program Overview
   - Benefits (with instructor profiles)
   - Pricing (100% refund offer)
   - Demand (statistics & why AWS)
   - Footer (contact info)
✅ Exact color scheme applied (#201d3f, #f0f2f2, #c7cce5, #464d82, #a99673)
✅ Nunito font integrated
✅ Fully responsive design
✅ Smooth animations and hover effects
✅ All content from your flyers included

## ⚠️ Common Issues

**Issue**: Errors when starting
**Solution**: Make sure you ran `npm install` first

**Issue**: Images not showing
**Solution**: 
1. Check that images are in `public/images/` folder
2. Check that filenames match exactly (case-sensitive)
3. Try refreshing the browser (Ctrl+F5)

**Issue**: TypeScript errors
**Solution**: The errors you see are normal before `npm install`. They'll disappear after installing dependencies.

## 🌐 Deployment

### Deploy to AWS Lightsail (Recommended for Production)

**Prerequisites:**
- AWS Lightsail instance running (Ubuntu 20.04 or later recommended)
- SSH access to your Lightsail instance
- Domain name (optional but recommended)

**Step-by-Step Lightsail Deployment:**

#### 1️⃣ Connect to Your Lightsail Instance
```bash
ssh -i /path/to/your-key.pem ubuntu@your-lightsail-ip
```

#### 2️⃣ Install Node.js and npm
```bash
# Update system packages
sudo apt update
sudo apt upgrade -y

# Install Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

#### 3️⃣ Install Nginx (Web Server)
```bash
# Install Nginx
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### 4️⃣ Clone Your Repository
```bash
# Navigate to web directory
cd /var/www/

# Clone your repository
sudo git clone https://github.com/omthakurofficial/tekbay-academy.git

# Set permissions
sudo chown -R $USER:$USER tekbay-academy
cd tekbay-academy
```

#### 5️⃣ Install Dependencies and Build
```bash
# Install project dependencies
npm install

# Build production version
npm run build
```

#### 6️⃣ Configure Nginx
```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/tekbay
```

**Paste this configuration:**
```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or Lightsail IP
    
    root /var/www/tekbay-academy/build;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
```

**Save and exit** (Ctrl+X, then Y, then Enter)

#### 7️⃣ Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/tekbay /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

#### 8️⃣ Configure Firewall
```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

#### 9️⃣ Set Up SSL Certificate (Optional but Recommended)
```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is set up automatically
```

#### 🔄 Update Deployment (When You Push Changes)
```bash
# SSH into your Lightsail instance
ssh -i /path/to/your-key.pem ubuntu@your-lightsail-ip

# Navigate to project directory
cd /var/www/tekbay-academy

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Reload Nginx (if needed)
sudo systemctl reload nginx
```

#### 🤖 Automated Deployment Script
Create a deployment script for easier updates:

```bash
# Create script
nano ~/deploy-tekbay.sh
```

**Add this content:**
```bash
#!/bin/bash
echo "🚀 Deploying TekBay Academy..."
cd /var/www/tekbay-academy
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "✅ Deployment complete!"
```

**Make it executable:**
```bash
chmod +x ~/deploy-tekbay.sh
```

**Run it anytime:**
```bash
~/deploy-tekbay.sh
```

---

### Deploy to Netlify (Free):
1. Run `npm run build`
2. Drag the `build` folder to Netlify: https://app.netlify.com/drop

### Deploy to Vercel (Free):
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to GitHub Pages:
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/tekbay",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📞 Support

If you need help:
- Check README.md for detailed documentation
- Check DESIGN_GUIDE.md for color and design specifications
- Email: apprentice@tekbay.digital

## ✅ Checklist

Before launching:
- [ ] All images added to `public/images/`
- [ ] Tested on desktop browser
- [ ] Tested on mobile (Chrome DevTools)
- [ ] All links work correctly
- [ ] Email link (apprentice@tekbay.digital) works
- [ ] Colors match brand guidelines
- [ ] Content is proofread

---

**You're ready to go! 🎉**

Run `npm install` then `npm start` to see your landing page!
