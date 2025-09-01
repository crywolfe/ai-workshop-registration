# AI Lunch-n-Learn Workshop Registration System

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()

A complete workshop registration system for AI educational events, featuring a responsive web form and automated backend processing with Google Apps Script.

## 📋 Table of Contents

- [🚀 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Technology Stack](#%EF%B8%8F-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🎨 Design System](#-design-system)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

## 🚀 Overview

This project provides a professional workshop registration system for the "Unlocking AI: It's More Than Just Advanced Search – Practical Tools for Your Business" workshop series. The system includes:

- **Responsive Web Form**: Modern, mobile-first registration interface
- **Google Apps Script Backend**: Automated form processing and data management
- **Email Automation**: Confirmation emails with calendar invites
- **Reminder System**: Automated reminder emails before events
- **Data Management**: Google Sheets integration for registration tracking

## ✨ Features

- **Professional Design**: Tailwind CSS with Intificia brand colors
- **Mobile Responsive**: Optimized for all device sizes
- **Form Validation**: Client-side and server-side validation
- **Automated Emails**: Instant confirmation emails with calendar invites
- **Smart Reminders**: Automated 10-day and 3-day reminder system
- **Data Export**: Google Sheets integration for easy data management
- **No Sales Pitch**: Pure educational content focus

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Backend**: Google Apps Script
- **Data Storage**: Google Sheets
- **Email Service**: Gmail API
- **Calendar Integration**: iCal (.ics) file generation
- **Hosting**: GitHub Pages (recommended)

## 📁 Project Structure

```
intificia-lunch-n-learn/
├── index.html              # Main registration form
├── README.md               # This file
├── SETUP.md                # Detailed setup instructions
├── CRUSH.md                # Code style and development guidelines
└── AI Lunch-n-Learn Code.js # Google Apps Script backend code
```

## 🚀 Quick Start

Get up and running in minutes with this streamlined setup process.

### Prerequisites
- ✅ Google account with Google Sheets and Apps Script access
- ✅ GitHub account (for hosting)
- ✅ Basic knowledge of HTML/CSS/JavaScript

### ⚡ 3-Step Setup

1. **📥 Get the Code**
   ```bash
   git clone https://github.com/yourusername/intificia-lunch-n-learn.git
   cd intificia-lunch-n-learn
   ```

2. **🔧 Configure Backend**
   - Follow the [detailed setup guide](SETUP.md) for Google Apps Script
   - Set up Google Sheet with required columns
   - Deploy web app and copy the URL

3. **🚀 Deploy & Test**
   ```bash
   # For local development
   open index.html  # macOS
   # or use a local server
   python -m http.server 8000
   ```

### 🎯 Quick Links
- **[📖 Complete Setup Guide](SETUP.md)** - Detailed configuration steps
- **[🎨 Design Guidelines](CRUSH.md)** - Code style and best practices
- **[🔧 Live Demo](https://yourusername.github.io/intificia-lunch-n-learn/)** - Test the registration form

## 🎨 Design System

Built with modern web standards and Intificia's brand identity.

| Element | Color | Hex Code |
|---------|-------|----------|
| **Primary** | Intificia Dark Blue | `#1A3A3A` |
| **Accent** | Intificia Blue | `#2563eb` |
| **Light Accent** | Light Blue | `#dbeafe` |
| **Text** | Dark Gray | `#222222` |
| **Background** | Light Gray | `#F8F9FA` |

**Typography**: Poppins (Google Fonts) - Weights: 400, 600, 700

## ⚙️ System Configuration

### 📝 Form Fields
- **Full Name** (required)
- **Email Address** (required)
- **Business Name** (optional)
- **AI Topics of Interest** (optional)

### 🤖 Automation Features
- ✅ **Instant Confirmation**: Email with calendar invite (.ics)
- ✅ **Smart Reminders**: 10-day, 3-day, and same-day notifications
- ✅ **Duplicate Prevention**: Automatic duplicate registration handling
- ✅ **Data Validation**: Client and server-side form validation

### 📊 Data Storage
Google Sheets integration with automated tracking:
`Date | Name | Email | Business | Interests | ReminderStatus`

## 🧪 Testing

Ensure everything works perfectly before going live.

### ✅ Quick Test Checklist
- [ ] **Form Submission**: Submit test registration and verify Google Sheet data
- [ ] **Email Delivery**: Check confirmation email receipt and calendar invite
- [ ] **Mobile Responsive**: Test form on different devices and screen sizes
- [ ] **Validation**: Test required fields and email format validation

### 🔄 Automated System Tests
- [ ] **Reminder Triggers**: Monitor 10-day, 3-day, and same-day email timing
- [ ] **Duplicate Prevention**: Test duplicate email handling
- [ ] **Error Handling**: Verify graceful failure handling

### 🐛 Troubleshooting
Common issues and solutions available in [SETUP.md](SETUP.md#troubleshooting)

## 🚀 Deployment

Choose your preferred hosting method for production deployment.

### 🌐 GitHub Pages (Recommended)
```bash
# 1. Create and push to GitHub repository
git remote add origin https://github.com/yourusername/intificia-lunch-n-learn.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to Settings → Pages → Source: "main" → Save

# 3. Update form action URL
# Replace with your Google Apps Script web app URL
```

### ☁️ Other Hosting Options
- **Netlify**: Drag & drop `index.html` for instant hosting
- **Vercel**: Connect GitHub repo for automatic deployments
- **Traditional Hosting**: Upload files via FTP

### 🔧 Google Apps Script Setup
1. **Deploy Web App**: Set execution access to "Anyone"
2. **Copy URL**: Get the web app URL from deployment
3. **Update Form**: Replace the action URL in `index.html`

## 📚 Documentation

### 📖 Guides & References
- **[📋 SETUP.md](SETUP.md)** - Complete setup and deployment guide
- **[🎨 CRUSH.md](CRUSH.md)** - Code style guidelines and best practices
- **[🔧 Backend Code](AI%20Lunch-n-Learn%20Code.js)** - Google Apps Script with detailed comments

### 🆘 Need Help?
- **Issues**: [GitHub Issues](../../issues) - Report bugs or request features
- **Discussions**: [GitHub Discussions](../../discussions) - Ask questions and get help
- **Wiki**: [Project Wiki](../../wiki) - Extended documentation and FAQs

## 🤝 Contributing

We welcome contributions! This project follows standard open-source practices.

### 🚀 How to Contribute
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Follow** code style in [CRUSH.md](CRUSH.md)
4. **Test** thoroughly - all changes must pass validation
5. **Commit** with clear messages: `git commit -m 'Add amazing feature'`
6. **Push** to your branch: `git push origin feature/amazing-feature`
7. **Open** a Pull Request

### ✅ Contribution Guidelines
- [ ] Follow the established code style
- [ ] Test all changes (form validation, email delivery, mobile responsiveness)
- [ ] Update documentation as needed
- [ ] Ensure accessibility compliance
- [ ] Add appropriate comments for complex logic

## 📞 Support & Contact

### 👤 Primary Contact
**Gerry Wolfe** - AI Consultant
- **Email**: gwolfe@intificia.com
- **LinkedIn**: [linkedin.com/in/gerrywolfe](https://linkedin.com/in/gerrywolfe)
- **Company**: [Intificia.com](https://intificia.com)

### 🆘 Getting Help
- **🐛 Bug Reports**: [Create an Issue](../../issues/new?template=bug_report.md)
- **💡 Feature Requests**: [Create an Issue](../../issues/new?template=feature_request.md)
- **❓ Questions**: [GitHub Discussions](../../discussions)

### 📧 Response Times
- **Critical Issues**: Within 24 hours
- **General Questions**: Within 2-3 business days
- **Feature Requests**: Reviewed weekly

## 📄 License & Credits

### 📋 License
This project is designed for educational workshop registration purposes. Please ensure compliance with:
- Google Apps Script Terms of Service
- GitHub Pages Terms of Service
- Gmail API Usage Policies

### 🏆 Credits
**Built with ❤️ for the Bismarck Chamber of Commerce AI Lunch-n-Learn Workshop Series**

### 🔄 Version History
- **v1.0.0** - Initial release with complete registration system
  - Full form validation and mobile responsiveness
  - Automated email system with calendar invites
  - Smart reminder system (10-day, 3-day, same-day)
  - Google Sheets integration and data management

---

<div align="center">
  <p><strong>Questions? Issues? Ideas?</strong> We'd love to hear from you!</p>
  <p>🚀 <a href="../../issues">Open an Issue</a> • 💬 <a href="../../discussions">Start a Discussion</a> • 📧 <a href="mailto:gwolfe@intificia.com">Email Support</a></p>
</div>
