# 🎨 CRUSH.md - Code Style & Development Guidelines

[![Code Style](https://img.shields.io/badge/code%20style-Airbnb-blue.svg)](https://github.com/airbnb/javascript)
[![ESLint](https://img.shields.io/badge/ESLint-8.0+-blue.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.0+-blue.svg)](https://prettier.io/)

> Comprehensive development guidelines for the AI Lunch-n-Learn Registration System

## 📋 Table of Contents

- [🚀 Development Workflow](#-development-workflow)
- [💻 Code Style Guidelines](#-code-style-guidelines)
- [🎨 Design System](#-design-system)
- [🧪 Testing Standards](#-testing-standards)
- [🚀 Deployment Guidelines](#-deployment-guidelines)
- [🔧 Development Tools](#-development-tools)
- [📚 Resources](#-resources)

## 🚀 Development Workflow

### 🛠️ Local Development Setup
```bash
# Clone repository
git clone https://github.com/yourusername/intificia-lunch-n-learn.git
cd intificia-lunch-n-learn

# For HTML development
open index.html  # macOS
# or use a local server
python -m http.server 8000
```

### ✅ Pre-commit Checklist
- [ ] Code follows style guidelines
- [ ] All tests pass (if applicable)
- [ ] No console.log statements in production code
- [ ] JSDoc comments added for new functions
- [ ] Mobile responsiveness verified
- [ ] Accessibility standards met

## 💻 Code Style Guidelines

### 📜 JavaScript (Google Apps Script)

#### Syntax & Structure
- **ES5+ Compatible:** Use syntax compatible with Google Apps Script runtime
- **Strict Mode:** Always use `'use strict';` at the top of files
- **Semicolons:** Required for all statements
- **Quotes:** Use single quotes for strings, double quotes for HTML attributes

#### Naming Conventions
```javascript
// ✅ Good Examples
const spreadsheetId = '1ABC...xyz';
const userEmail = 'user@example.com';
const eventDetails = {};
const isValidEmail = true;

function sendConfirmationEmail() {}
function validateFormData() {}
function getSheetByName() {}

// ❌ Avoid These
const spreadsheet_id = '1ABC...xyz'; // snake_case
const useremail = 'user@example.com'; // no camelCase
const EventDetails = {}; // PascalCase for objects
const valid_email = true; // snake_case for variables
```

#### Functions & Documentation
```javascript
/**
 * Sends confirmation email with calendar invite
 * @param {string} email - Recipient email address
 * @param {string} name - Recipient full name
 * @param {Object} eventDetails - Event information
 * @returns {boolean} Success status
 */
function sendConfirmationEmail(email, name, eventDetails) {
  'use strict';

  try {
    // Function implementation
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}
```

#### Error Handling
```javascript
// ✅ Proper Error Handling
function processRegistration(formData) {
  'use strict';

  try {
    // Validate input
    if (!formData.email) {
      throw new Error('Email is required');
    }

    // Process data
    const result = saveToSheet(formData);

    if (!result.success) {
      throw new Error('Failed to save to sheet: ' + result.error);
    }

    return { success: true, message: 'Registration processed successfully' };

  } catch (error) {
    console.error('Registration processing failed:', error);
    return {
      success: false,
      error: error.message,
      code: 'REGISTRATION_ERROR'
    };
  }
}
```

#### Constants & Configuration
```javascript
// ✅ Constants at top of file
const SHEET_NAME = 'AI Lunch-n-Learn Registrations';
const EMAIL_SUBJECT = 'Workshop Registration Confirmed';
const EVENT_TIMEZONE = 'America/Chicago';
const MAX_RETRY_ATTEMPTS = 3;

// Configuration object for event details
const EVENT_CONFIG = {
  title: 'AI Lunch-n-Learn Workshop',
  date: new Date('2025-10-15T12:00:00'),
  duration: 35, // minutes
  location: 'Bismarck Chamber of Commerce',
  timezone: EVENT_TIMEZONE
};
```

### 🌐 HTML Standards

#### Semantic Structure
```html
<!-- ✅ Semantic HTML5 -->
<header class="bg-primary text-white py-6">
  <nav class="container mx-auto px-4">
    <h1 class="text-3xl font-bold">AI Workshop</h1>
  </nav>
</header>

<main class="container mx-auto px-4 py-8">
  <section class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold mb-4">Register Now</h2>
    <form id="registration-form" action="#" method="POST">
      <!-- Form content -->
    </form>
  </section>
</main>

<footer class="bg-primary text-white py-6">
  <div class="container mx-auto px-4">
    <p>&copy; 2024 Intificia</p>
  </div>
</footer>
```

#### Form Best Practices
```html
<!-- ✅ Accessible Form -->
<form id="registration-form" action="#" method="POST" novalidate>
  <div class="mb-4">
    <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">
      Full Name <span class="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      required
      aria-describedby="fullName-error"
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your full name"
    >
    <div id="fullName-error" class="text-red-500 text-sm mt-1" role="alert"></div>
  </div>

  <button
    type="submit"
    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    aria-describedby="submit-status"
  >
    Register Now
  </button>
  <div id="submit-status" class="sr-only" aria-live="polite"></div>
</form>
```

## 🎨 Design System

### 🎨 Color Palette
| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| ![#1A3A3A](https://via.placeholder.com/20/1A3A3A/000000?text=+) | Primary | `#1A3A3A` | Headers, footers, important elements |
| ![#2563eb](https://via.placeholder.com/20/2563eb/000000?text=+) | Accent | `#2563eb` | Buttons, links, focus states |
| ![#dbeafe](https://via.placeholder.com/20/dbeafe/000000?text=+) | Light Accent | `#dbeafe` | Subtle backgrounds, highlights |
| ![#222222](https://via.placeholder.com/20/222222/000000?text=+) | Text | `#222222` | Main body text |
| ![#F8F9FA](https://via.placeholder.com/20/F8F9FA/000000?text=+) | Background | `#F8F9FA` | Page background |
| ![#ffffff](https://via.placeholder.com/20/ffffff/000000?text=+) | White | `#ffffff` | Clean backgrounds, cards |

### 📝 Typography Scale
```css
/* Font Sizes */
.text-xs { font-size: 0.75rem; }    /* 12px */
.text-sm { font-size: 0.875rem; }   /* 14px */
.text-base { font-size: 1rem; }     /* 16px */
.text-lg { font-size: 1.125rem; }   /* 18px */
.text-xl { font-size: 1.25rem; }    /* 20px */
.text-2xl { font-size: 1.5rem; }    /* 24px */
.text-3xl { font-size: 1.875rem; }  /* 30px */
.text-4xl { font-size: 2.25rem; }   /* 36px */

/* Font Weights */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

## 🧪 Testing Standards

### 🔍 Manual Testing Checklist
- [ ] **Form Validation:** Test all required fields
- [ ] **Email Format:** Verify email validation works
- [ ] **Mobile Responsive:** Test on different screen sizes
- [ ] **Cross-browser:** Test in Chrome, Firefox, Safari, Edge
- [ ] **Error Handling:** Test network failures and server errors
- [ ] **Success Flow:** Complete registration and verify email/calendar

### 🐛 Common Issues to Test
- [ ] **Duplicate Submissions:** Rapid form submissions
- [ ] **Special Characters:** Names with apostrophes, accents
- [ ] **Long Text:** Very long names or business names
- [ ] **Network Issues:** Slow connections, timeouts
- [ ] **Browser Back/Forward:** Navigation during submission

## 🚀 Deployment Guidelines

### 📦 Pre-deployment Checklist
- [ ] Update Google Apps Script URL in `index.html`
- [ ] Test form submission with live Google Sheet
- [ ] Verify email sending works
- [ ] Check mobile responsiveness
- [ ] Test calendar invite functionality
- [ ] Clear browser cache before final testing

### 🌐 GitHub Pages Deployment
```bash
# 1. Ensure repository is public
# 2. Go to Settings → Pages
# 3. Select main branch and /root
# 4. Wait for deployment (usually 2-3 minutes)
# 5. Test the live URL
```

### 🔧 Google Apps Script Deployment
1. **Test Locally First:** Run all functions manually
2. **Deploy as Web App:**
   - Execute as: `Me`
   - Who has access: `Anyone`
   - Copy the deployment URL
3. **Update HTML Form:** Replace action URL
4. **Test End-to-End:** Complete registration flow

## 🔧 Development Tools

### 📝 Recommended Editor Setup
```json
// VS Code settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "html"
  }
}
```

### 🔍 Debugging Techniques
```javascript
// Console debugging
console.log('Debug info:', variable);
console.table(data); // For arrays/objects
console.time('Function execution');

// Network debugging
// Use browser DevTools → Network tab

// Apps Script debugging
// Use Logger.log() and View → Logs in Apps Script editor
```

## 📚 Resources

### 📖 Documentation
- [Google Apps Script Reference](https://developers.google.com/apps-script/reference)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 Accessibility](https://www.w3.org/WAI/tutorials/)

### 🛠️ Tools & Services
- [Google Apps Script](https://script.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)

---

## 📝 Code Review Checklist

### 🔍 Code Quality
- [ ] Follows established naming conventions
- [ ] Includes appropriate JSDoc comments
- [ ] Uses proper error handling
- [ ] No console.log statements in production
- [ ] Code is DRY (Don't Repeat Yourself)

### 🧪 Functionality
- [ ] All requirements implemented
- [ ] Edge cases handled appropriately
- [ ] No breaking changes to existing functionality
- [ ] Proper validation and sanitization

### 🎨 User Experience
- [ ] Mobile responsive design
- [ ] Accessible markup (ARIA labels, semantic HTML)
- [ ] Proper loading states and error messages
- [ ] Intuitive user interface

### 🚀 Performance
- [ ] Minimal HTTP requests
- [ ] Optimized images and assets
- [ ] Efficient JavaScript execution
- [ ] Proper caching strategies

---

*These guidelines ensure consistent, maintainable, and high-quality code across the project. Regular updates to this document will reflect new best practices and project requirements.*