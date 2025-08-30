# AI Lunch-n-Learn Workshop Registration System

A complete workshop registration system for AI educational events, featuring a responsive web form and automated backend processing with Google Apps Script.

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

### Prerequisites
- Google account with access to Google Sheets and Apps Script
- GitHub account (for hosting)
- Basic knowledge of HTML/CSS/JavaScript

### Installation Steps

1. **Clone or download this repository**
2. **Follow the detailed setup guide in [SETUP.md](SETUP.md)**
3. **Deploy to GitHub Pages for live hosting**

### Local Development
```bash
# Open the HTML file in your browser
open index.html  # macOS
# or use a local server for better development experience
```

## 📋 Setup Requirements

The system requires setup of:
- Google Sheet with specific column headers
- Google Apps Script with proper permissions
- Web app deployment configuration
- GitHub Pages hosting setup

**For complete setup instructions, see [SETUP.md](SETUP.md)**

## 🎨 Design System

### Color Palette
- **Primary**: `#1A3A3A` (Intificia Dark Blue)
- **Accent**: `#2563eb` (Intificia Blue)
- **Light Accent**: `#dbeafe` (Light Blue)
- **Text**: `#222222` (Dark Gray)
- **Background**: `#F8F9FA` (Light Gray)
- **White**: `#ffffff` (Pure White)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

## 🔧 Configuration

### Form Fields
- Full Name (required)
- Email Address (required)
- Business Name (optional)
- AI Topics of Interest (optional)

### Automated Features
- **Confirmation Email**: Sent immediately upon registration
- **Calendar Invite**: .ics file attachment
- **10-Day Reminder**: Automated reminder email
- **3-Day Reminder**: Final reminder email
- **0-Day Reminder**: Same-day reminder email

## 📊 Data Management

Registrations are stored in Google Sheets with columns:
- Date
- Name
- Email
- Business
- Interests
- 10DayReminderSent
- 3DayReminderSent
- 0DayReminderSent

## 🧪 Testing

### Form Testing
1. Submit test registrations through the live form
2. Verify data appears in Google Sheet
3. Check confirmation emails are received
4. Test calendar invite functionality

### Automated Systems
- Monitor reminder email triggers (10-day, 3-day, and 0-day)
- Verify email delivery and timing
- Check duplicate prevention logic

## 🚀 Deployment

### GitHub Pages
1. Create public repository
2. Upload `index.html`
3. Enable GitHub Pages from main branch
4. Update form action URL with Apps Script web app URL

### Google Apps Script
1. Deploy as web app
2. Set access to "Anyone"
3. Copy web app URL for form integration

## 📚 Documentation

- **[SETUP.md](SETUP.md)**: Complete setup and deployment guide
- **[CRUSH.md](CRUSH.md)**: Code style guidelines and best practices
- **AI Lunch-n-Learn Code.js**: Backend script with detailed comments

## 🤝 Contributing

This project is designed for educational workshop registration. For modifications:

1. Follow the code style guidelines in [CRUSH.md](CRUSH.md)
2. Test all changes thoroughly
3. Update documentation as needed
4. Ensure mobile responsiveness is maintained

## 📞 Support

**Contact**: Gerry Wolfe, AI Consultant  
**Email**: gwolfe@intificia.com  
**LinkedIn**: [linkedin.com/in/gerrywolfe](https://linkedin.com/in/gerrywolfe)  
**Company**: [Intificia.com](https://intificia.com)

## 📄 License

This project is designed for educational workshop registration purposes. Please ensure compliance with Google Apps Script and GitHub Pages terms of service.

## 🔄 Version History

- **v1.0**: Initial release with complete registration system
- Includes form, backend processing, email automation, and reminder system

---

**Built with ❤️ for the Bismarck Chamber of Commerce AI Lunch-n-Learn Workshop Series**
