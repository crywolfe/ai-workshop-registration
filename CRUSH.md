# CRUSH.md - AI Lunch-n-Learn Registration System

## Commands
- No build/test commands required - this is a static HTML project with Google Apps Script backend
- For local HTML development: `open index.html` (macOS) or use a local server
- Deploy: Update form action in index.html with Google Apps Script URL and host on GitHub Pages

## Code Style Guidelines

### JavaScript (Google Apps Script)
- Use ES5+ compatible syntax for Apps Script compatibility
- Use JSDoc comments for all functions with @param and @returns
- Error handling: Use try-catch blocks with proper error logging
- Variable naming: camelCase for variables, PascalCase for functions
- Constants: UPPER_SNAKE_CASE for configuration values
- Use proper locking with LockService for concurrent access

### HTML/CSS
- Use semantic HTML5 tags
- Tailwind CSS for styling with Intificia brand colors
- Form validation: HTML5 required attributes where appropriate
- JavaScript form handling with fetch API and proper error states
- Mobile-first responsive design with container classes

### Color Palette (Intificia Brand)
- Primary: `intificia-dark-blue` (#1A3A3A) - Headers, footers, important elements
- Accent: `intificia-accent` (#2563eb) - Buttons, links, focus states, hover effects
- Light Accent: `intificia-light-accent` (#dbeafe) - Subtle backgrounds, highlights
- Text: `intificia-text` (#222222) - Main body text
- Background: `intificia-bg` (#F8F9FA) - Page background
- White: `intificia-white` (#ffffff) - Clean backgrounds, card elements

### Naming Conventions
- Functions: descriptive PascalCase (e.g., `sendConfirmationEmail`)
- Variables: descriptive camelCase (e.g., `spreadsheetId`, `eventDetails`)
- Constants: UPPER_SNAKE_CASE (e.g., `sheetName`)
- CSS classes: kebab-case following Tailwind conventions

### Error Handling
- Always include try-catch blocks in Apps Script functions
- Return JSON responses with error details for client handling
- Use console.error for server-side error logging
- Display user-friendly error messages on the frontend