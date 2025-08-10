const sheetName = 'AI Lunch-n-Learn Registrations';
const scriptProp = PropertiesService.getScriptProperties();

/**
 * Run this function once to set up the script properties.
 * Replace 'YOUR_SPREADSHEET_ID' with your actual Google Sheet ID.
 */
function initialSetup() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // <-- IMPORTANT: PASTE YOUR SPREADSHEET ID HERE
  if (spreadsheetId === 'YOUR_SPREADSHEET_ID' || spreadsheetId.length < 20) {
    throw new Error('Invalid Spreadsheet ID. Please paste the ID of your Google Sheet into the initialSetup function.');
  }
  scriptProp.setProperty('key', spreadsheetId);
  console.log('Script setup complete. Spreadsheet ID is stored.');
}

/**
 * Handles HTTP POST requests from the registration form.
 * @param {Object} e - The event parameter from the POST request.
 * @returns {ContentService.TextOutput} JSON response indicating success or error.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(15000); // Increased lock timeout for safety

  try {
    const spreadsheetId = scriptProp.getProperty('key');
    if (!spreadsheetId) {
      throw new Error('Spreadsheet ID not found. Please run initialSetup() first.');
    }

    const doc = SpreadsheetApp.openById(spreadsheetId);
    const sheet = doc.getSheetByName(sheetName);
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found. Please ensure the sheet exists and is named correctly.`);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(header => {
      if (header === 'Date') {
        return new Date();
      }
      return e.parameter[header] || ''; // Use empty string for missing optional fields
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // --- Email and Calendar Invite ---
    const userName = e.parameter['Name'];
    const userEmail = e.parameter['Email'];

    const eventDetails = {
      title: 'AI Lunch-n-Learn: AI Is More Than Advanced Google Search',
      start: new Date('2025-12-10T12:00:00-06:00'), // CDT is UTC-5, but to be safe using UTC-6 for CST
      end: new Date('2025-12-10T12:35:00-06:00'),
      location: 'Bismarck Chamber of Commerce (Room TBD)',
      description: 'Join Gerry Wolfe from Intificia.com for a 35-minute workshop to learn practical AI applications for your business. Bring your lunch and a notebook! Contact: gwolfe@intificia.com',
      organizer: { name: 'Gerry Wolfe', email: 'gwolfe@intificia.com' }
    };

    sendConfirmationEmail(userEmail, userName, eventDetails);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error('Error in doPost:', err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': err.message }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Sends a confirmation email with an iCalendar attachment.
 * @param {string} userEmail The recipient's email address.
 * @param {string} userName The recipient's name.
 * @param {object} eventDetails The details of the event.
 */
function sendConfirmationEmail(userEmail, userName, eventDetails) {
  const subject = `Confirmation: You're Registered for the AI Lunch-n-Learn!`;
  const message = `
Dear ${userName},

Thank you for registering for the AI Lunch-n-Learn workshop!

We have reserved your spot. Here are the event details:

- Event: ${eventDetails.title}
- Date & Time: ${eventDetails.start.toLocaleString('en-US', { timeZone: "America/Chicago", dateStyle: 'full', timeStyle: 'short' })}
- Location: ${eventDetails.location}
- What to Bring: Your lunch and a notebook for ideas!

An iCalendar (.ics) file is attached to this email. Please open it to add the event directly to your calendar.

We look forward to seeing you there!

Best regards,

Gerry Wolfe
AI Consultant, Intificia.com
`;

  const icsContent = createIcsContent(eventDetails);

  MailApp.sendEmail({
    to: userEmail,
    subject: subject,
    body: message,
    attachments: [{
      fileName: 'event.ics',
      content: icsContent,
      mimeType: 'text/calendar'
    }]
  });
}

/**
 * Generates the iCalendar (.ics) file content.
 * @param {object} eventDetails The details of the event.
 * @returns {string} The content of the .ics file.
 */
function createIcsContent(eventDetails) {
  const formatDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Intificia//AI Lunch-n-Learn//EN',
    'BEGIN:VEVENT',
    `UID:${new Date().getTime()}@intificia.com`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(eventDetails.start)}`,
    `DTEND:${formatDate(eventDetails.end)}`,
    `SUMMARY:${eventDetails.title}`,
    `DESCRIPTION:${eventDetails.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${eventDetails.location}`,
    `ORGANIZER;CN="${eventDetails.organizer.name}":mailto:${eventDetails.organizer.email}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}