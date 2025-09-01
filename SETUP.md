# 🚀 AI Lunch-n-Learn Registration System: Complete Setup Guide

[![Setup Time](https://img.shields.io/badge/Setup%20Time-15--20%20minutes-blue.svg)]()
[![Difficulty](https://img.shields.io/badge/Difficulty-Intermediate-green.svg)]()

> Complete step-by-step guide to deploy your workshop registration system with Google Apps Script backend.

## 📋 Table of Contents

- [🎯 Quick Start](#-quick-start)
- [📋 Prerequisites](#-prerequisites)
- [🗂️ Part 1: Google Sheet Setup](#%EF%B8%8F-part-1-google-sheet-setup)
- [☁️ Part 2: Apps Script Backend](#%EF%B8%8F-part-2-apps-script-backend)
- [🌐 Part 3: Frontend Deployment](#-part-3-frontend-deployment)
- [🧪 Part 4: Testing & Verification](#-part-4-testing--verification)
- [📧 Part 5: Email Reminders (Optional)](#-part-5-email-reminders-optional)
- [🔧 Troubleshooting](#-troubleshooting)
- [📞 Support](#-support)

## 🎯 Quick Start

**For experienced users:** Complete setup in 3 commands:
```bash
# 1. Clone and prepare
git clone https://github.com/yourusername/intificia-lunch-n-learn.git
cd intificia-lunch-n-learn

# 2. Deploy to GitHub Pages
# Upload index.html to GitHub → Settings → Pages → Deploy

# 3. Configure Google backend
# Follow Parts 1-2 below, then update form action URL
```

---

## 📋 Prerequisites

### ✅ Required Accounts & Tools
- [ ] **Google Account** with Gmail and Google Sheets access
- [ ] **GitHub Account** for hosting the registration form
- [ ] **Text Editor** (VS Code, Sublime Text, etc.)
- [ ] **Web Browser** for testing
- [ ] **Basic Command Line** knowledge (optional but helpful)

### ✅ System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Google services
- Email account for testing confirmations

---

## 🗂️ Part 1: Google Sheet Setup

Create and configure your data storage system.

### 1.1 Create Google Sheet
1. Go to [sheets.new](https://sheets.new)
2. Rename spreadsheet to: `AI Lunch-n-Learn Registrations`
3. Verify sheet tab name is: `AI Lunch-n-Learn Registrations`

### 1.2 Set Up Column Headers
Add these headers in **Row 1** (columns A-E):

| Column | Header | Purpose |
|--------|--------|---------|
| A1 | `Date` | Auto-generated timestamp |
| B1 | `Name` | Registrant's full name |
| C1 | `Email` | Contact email address |
| D1 | `Business` | Company/organization |
| E1 | `Interests` | AI topics of interest |

### 1.3 Get Spreadsheet ID
1. Copy the ID from your sheet's URL:
   ```
   https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
   ```
2. Save this ID - you'll need it for the Apps Script setup

---

## ☁️ Part 2: Apps Script Backend

Deploy the automated processing system.

### 2.1 Create Apps Script Project
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code in the editor
3. Copy entire contents of `AI Lunch-n-Learn Code.js` and paste it in

### 2.2 Configure Spreadsheet ID
1. Find the `initialSetup()` function in the script
2. Replace `'YOUR_SPREADSHEET_ID'` with your actual spreadsheet ID:
   ```javascript
   const spreadsheetId = '1ABC...xyz'; // Your actual ID here
   ```

### 2.3 Run Initial Setup
1. Select `initialSetup` from the function dropdown
2. Click **Run** (▶️ button)
3. **Grant permissions** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Allow" for required permissions

### 2.4 Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click gear icon → Select **Web app**
3. Configure settings:
   - **Description:** `AI Workshop Registration Handler`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Click **Deploy**
5. **Copy the Web App URL** - save this for the HTML form

## 🌐 Part 3: Frontend Deployment

Host your registration form on the web.

### 3.1 GitHub Repository Setup
1. Create new **public** repository on GitHub
2. Upload `index.html` file to the repository
3. Commit with message: `"Add registration form"`

### 3.2 Enable GitHub Pages
1. Go to repository **Settings** tab
2. Scroll to **Pages** section
3. Under "Source", select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**

### 3.3 Update Form Action URL
1. Open `index.html` in text editor
2. Find the `<form>` tag with `action` attribute
3. Replace the placeholder URL with your **Web App URL**:
   ```html
   action="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
   ```
4. Commit and push changes

---

## 🧪 Part 4: Testing & Verification

Ensure everything works correctly.

### 4.1 Test Form Submission
1. Open your GitHub Pages URL
2. Fill out and submit the registration form
3. Verify data appears in your Google Sheet
4. Check confirmation email was sent

### 4.2 Verify Email Functionality
- [ ] Confirmation email received
- [ ] Calendar invite (.ics file) attached
- [ ] Email formatting looks professional
- [ ] No errors in Google Apps Script logs

### 4.3 Check Data Storage
- [ ] All form fields saved correctly
- [ ] Timestamp generated automatically
- [ ] No duplicate entries on refresh

## 📧 Part 5: Email Reminders (Optional)

Set up automated reminder emails for better attendance.

### 5.1 Add Reminder Columns
1. Open your Google Sheet
2. Add these headers in next available columns:
   - `F1`: `10DayReminderSent`
   - `G1`: `3DayReminderSent`
   - `H1`: `0DayReminderSent`

### 5.2 Configure Time Trigger
1. In Apps Script editor, click **Triggers** (clock icon)
2. Click **+ Add Trigger**
3. Configure settings:
   - **Function:** `sendAutomatedReminders`
   - **Deployment:** `Head`
   - **Event Source:** `Time-driven`
   - **Trigger Type:** `Day timer`
   - **Time:** `8am - 9am` (or your preferred time)
4. Click **Save**

### 5.3 Test Reminder System
- [ ] Wait for trigger to run (or manually execute function)
- [ ] Check that reminder emails are sent appropriately
- [ ] Verify reminder tracking in Google Sheet

---

## 🔧 Troubleshooting

Common issues and their solutions.

### ❌ "Script Error" or "Authorization Required"
**Problem:** Apps Script permissions not granted properly
**Solution:**
1. Go to Apps Script editor
2. Click **Run** → Select `initialSetup`
3. Click "Authorize access" when prompted
4. Choose your Google account
5. Click "Allow" for all requested permissions

### ❌ Form Not Submitting Data
**Problem:** Web app URL incorrect in HTML form
**Solution:**
1. Check Apps Script deployment URL
2. Ensure "Who has access" is set to "Anyone"
3. Verify URL in `index.html` `action` attribute
4. Check browser console for errors

### ❌ Emails Not Being Sent
**Problem:** Gmail API permissions or quota issues
**Solution:**
1. Verify Apps Script has Gmail permissions
2. Check Google Apps Script quota limits
3. Test with a simple email function first
4. Check spam folder for test emails

### ❌ GitHub Pages Not Loading
**Problem:** Repository or Pages configuration issues
**Solution:**
1. Ensure repository is **public**
2. Check Pages settings: `main` branch, `/ (root)`
3. Wait 2-5 minutes for deployment
4. Clear browser cache and try incognito mode

### ❌ Calendar Invite Not Working
**Problem:** .ics file format or email client issues
**Solution:**
1. Test .ics file download manually
2. Check email client calendar integration
3. Verify event details in the script
4. Try different email clients (Gmail, Outlook)

### 🔍 Debug Tools
- **Apps Script Logs:** View → Logs
- **Browser Console:** F12 → Console tab
- **Network Tab:** F12 → Network tab (check form submission)
- **Gmail Sent Folder:** Verify emails are being sent

---

## 📞 Support

Need help? Here's how to get assistance.

### 🚀 Quick Help
- **Documentation:** Check [SETUP.md](SETUP.md) and [CRUSH.md](CRUSH.md)
- **Common Issues:** See Troubleshooting section above
- **GitHub Issues:** [Report bugs](../../issues) or [Request features](../../issues)

### 👥 Contact Information
**Gerry Wolfe** - AI Consultant & Project Lead
- **Email:** gwolfe@intificia.com
- **LinkedIn:** [linkedin.com/in/gerrywolfe](https://linkedin.com/in/gerrywolfe)
- **Company:** [Intificia.com](https://intificia.com)

### ⏰ Response Times
- **Critical Issues:** Within 24 hours
- **General Questions:** Within 2-3 business days
- **Feature Requests:** Reviewed weekly

---

## ✅ Setup Complete!

🎉 **Congratulations!** Your workshop registration system is now fully operational.

**What's Working:**
- ✅ Responsive registration form
- ✅ Automated Google Sheets integration
- ✅ Email confirmations with calendar invites
- ✅ Optional automated reminder system

**Next Steps:**
1. Share your GitHub Pages URL with potential attendees
2. Monitor registrations in your Google Sheet
3. Test the reminder system (if enabled)
4. Customize workshop details as needed

**Useful Links:**
- 📊 **View Registrations:** [Your Google Sheet]
- 🌐 **Live Registration Form:** [Your GitHub Pages URL]
- 🔧 **Apps Script Editor:** [Your Apps Script Project]

---

*Built with ❤️ for the Bismarck Chamber of Commerce AI Lunch-n-Learn Workshop Series*