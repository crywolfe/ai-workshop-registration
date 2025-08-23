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
      title: "Unlocking AI: It's More Than Just Advanced Search – Practical Tools for Your Business",
      start: new Date('2025-10-15T12:00:00-05:00'), // CDT is UTC-5
      end: new Date('2025-10-15T12:35:00-05:00'),
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

Bring your ideas and questions. We look forward to seeing you there!

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


/**
 * This function is designed to be run daily by a time-driven trigger.
 * It sends reminder emails 10 days and 3 days before the event.
 * It checks for status columns to avoid sending duplicate reminders.
 */
function sendAutomatedReminders() {
  const sheetName = 'AI Lunch-n-Learn Registrations';
  const scriptProp = PropertiesService.getScriptProperties();
  
  const spreadsheetId = scriptProp.getProperty('key');
  if (!spreadsheetId) {
    console.error('Spreadsheet ID not found. Run initialSetup().');
    return;
  }
  
  const doc = SpreadsheetApp.openById(spreadsheetId);
  const sheet = doc.getSheetByName(sheetName);
  if (!sheet) {
    console.error(`Sheet "${sheetName}" not found.`);
    return;
  }

  // --- Configuration ---
  const eventDate = new Date('2025-10-15T12:00:00-06:00'); // Central Time
  const eventName = "Unlocking AI: It's More Than Just Advanced Search – Practical Tools for Your Business";
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeUntilEvent = eventDate.getTime() - today.getTime();
  const daysUntilEvent = Math.ceil(timeUntilEvent / (1000 * 60 * 60 * 24));

  let reminderType = null;
  let reminderSubject = '';
  let reminderMessage = '';
  let statusColumnIndex = -1;

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // --- Determine if Today is a Reminder Day ---
  if (daysUntilEvent === 10) {
    reminderType = '10Day';
    statusColumnIndex = headers.indexOf('10DayReminderSent');
    reminderSubject = `Reminder: The ${eventName} workshop is in 10 Days!`;
    reminderMessage = `Hello [Name],\n\nThis is a friendly reminder that the "${eventName}" workshop you registered for is just 10 days away.\n\n- Date: ${eventDate}\n- Time: 12:00 PM (CDT)\n- Location: Bismarck Chamber of Commerce\n\nWe look forward to seeing you there!\n\nBest,\nGerry Wolfe`;
  } else if (daysUntilEvent === 3) {
    reminderType = '3Day';
    statusColumnIndex = headers.indexOf('3DayReminderSent');
    reminderSubject = `Getting Close Reminder: The ${eventName} workshop is in 3 Days!`;
    reminderMessage = `Hello [Name],\n\nThis is a friendly reminder for the "${eventName}" workshop. The event is just 3 days away!\n\n- Date: ${eventDate}\n- Time: 12:00 PM (CDT)\n- Location: Bismarck Chamber of Commerce\n- What to Bring: Your lunch and a notebook.\n\nWe're excited to share valuable AI insights with you. See you soon!\n\nBest,\nGerry Wolfe`;
  }
    else if (daysUntilEvent === 0) {
    reminderType = '0Day';
    statusColumnIndex = headers.indexOf('0DayReminderSent');
    reminderSubject = `Today's Reminder: The ${eventName} workshop is Today!`;
    reminderMessage = `Hello [Name],\n\nThis is your friendly reminder for the "${eventName}" workshop. The event is today!\n\n- Date: ${eventDate}\n- Time: 12:00 PM (CDT)\n- Location: Bismarck Chamber of Commerce\n- What to Bring: Your lunch and a notebook.\n\nWe're excited to share valuable AI insights with you. See you soon!\n\nBest,\nGerry Wolfe`;
  } else {
    console.log(`Not a reminder day. Days until event: ${daysUntilEvent}`);
    return; // Exit if it's not a reminder day
  }

  if (statusColumnIndex === -1) {
      console.error(`Status column for ${reminderType} reminder not found. Please add '10DayReminderSent', '3DayReminderSent', '0DayReminderSent' headers to your sheet.`);
      return;
  }

  // --- Send Emails ---
  const dataRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
  const data = dataRange.getValues();
  
  const nameColumnIndex = headers.indexOf('Name');
  const emailColumnIndex = headers.indexOf('Email');

  let emailsSent = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const name = row[nameColumnIndex];
    const email = row[emailColumnIndex];
    const reminderStatus = row[statusColumnIndex];

    // Send only if email exists, quota is available, and reminder hasn't been sent
    if (email && !reminderStatus && MailApp.getRemainingDailyQuota() > 0) {
      const personalizedMessage = reminderMessage.replace('[Name]', name);
      MailApp.sendEmail(email, reminderSubject, personalizedMessage);
      // Update the status in the sheet to avoid re-sending
      sheet.getRange(i + 2, statusColumnIndex + 1).setValue('SENT');
      emailsSent++;
    }
  }
  
  if (emailsSent > 0) {
    console.log(`Sent ${emailsSent} reminder emails for the ${reminderType} reminder.`);
  } else {
    console.log(`No new ${reminderType} reminders to send today.`);
  }
}