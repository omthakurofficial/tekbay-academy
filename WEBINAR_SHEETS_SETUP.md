# 🎯 TekBay Academy Webinar Google Sheets Integration Setup Guide

## Overview
This integration allows your webinar form to automatically save registrations to Google Sheets and send email notifications.

---

## 📋 Step-by-Step Setup

### Step 1: Create Google Sheets
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"TekBay Academy - Webinar Registrations"**
4. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123XYZ456-SPREADSHEET-ID-HERE/edit
                                      ↑ This part is your SPREADSHEET_ID
   ```

### Step 2: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click **"New project"**
3. Name it: **"TekBay Webinar Handler"**
4. Delete all existing code
5. Copy and paste the code from `/google-apps-script/webinar-handler.js`
6. **Update these values in the script:**
   ```javascript
   const SPREADSHEET_ID = '1your-spreadsheet-id-here'; // ← Your spreadsheet ID
   const EMAIL_RECIPIENT = 'apprenticeship@tekbay.digital'; // ← Your email
   ```

### Step 3: Deploy Google Apps Script
1. Click **"Deploy"** → **"New deployment"**
2. Click gear icon ⚙️ → Select **"Web app"**
3. Description: **"TekBay Webinar Form Handler"**
4. Execute as: **"Me"**
5. Who has access: **"Anyone"**
6. Click **"Deploy"**
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
   ```

### Step 4: Update React Component
1. Open `src/components/Webinar/Webinar.tsx`
2. Find this line (around line 25):
   ```typescript
   const WEBINAR_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';
   ```
3. **Replace with your actual deployment URL from Step 3**

### Step 5: Test the Integration
1. Start your development server: `npm run dev`
2. Go to the webinar page: `http://localhost:3000/webinar`
3. Fill out and submit the form
4. Check your Google Sheet for the new registration
5. Check your email for the notification

---

## 🔧 Configuration Options

### Email Notifications
To customize email notifications, edit the `sendWebinarEmailNotification` function in the Google Apps Script.

### Google Sheet Structure
The script automatically creates these columns:
- **Timestamp (IST)**: Registration date/time
- **Full Name**: User's name
- **Email**: User's email address
- **Mobile**: Phone number (optional)
- **Event Type**: "AI Careers 2026 Webinar"
- **Status**: "Registered"

### Form Validation
The React component validates:
- Full Name (required)
- Email (required, valid email format)
- Mobile (optional)

---

## 🐛 Troubleshooting

### Common Issues:

**1. Form submits but no data in Google Sheets**
- Check if SPREADSHEET_ID is correct
- Verify Google Apps Script permissions
- Check Apps Script execution logs

**2. No email notifications**
- Verify EMAIL_RECIPIENT address
- Check Gmail permissions in Google Apps Script
- Look at Apps Script logs for errors

**3. CORS errors in browser console**
- This is normal with `mode: 'no-cors'`
- Form should still work despite console warnings

**4. Permission errors**
- Re-deploy the Google Apps Script
- Make sure "Execute as: Me" and "Access: Anyone" are set

### Debug Steps:
1. Test Google Apps Script directly:
   - Visit your script URL in browser
   - Should show "TekBay Webinar Handler Active" page
2. Check Apps Script logs:
   - Go to script.google.com
   - Open your project
   - Click "Executions" to see logs
3. Test with browser developer tools:
   - Open Network tab
   - Submit form
   - Look for the POST request to your script URL

---

## 🎉 What Happens When Form is Submitted:

1. **User fills form** → React validates required fields
2. **Form submits** → Data sent to Google Apps Script
3. **Script processes** → Adds row to Google Sheets
4. **Email sent** → HTML notification to your email
5. **Success modal** → User sees confirmation message
6. **Form resets** → Ready for next registration

---

## 📊 Data Flow Diagram

```
User Form → React Component → Google Apps Script → Google Sheets
                                       ↓
                               Email Notification
```

---

## 🚀 Going Live

When deploying to production:
1. The Google Apps Script URL stays the same
2. No additional configuration needed
3. All registrations will be saved to the same Google Sheet
4. Email notifications will continue working

---

## 📞 Support

If you encounter issues:
1. Check the Google Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Test the form submission process step by step
4. Contact your development team with specific error messages

---

*Last updated: December 23, 2025*