// Google Apps Script - Copy this code to your Google Apps Script project
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Copy this entire code below
// 4. Create a Google Sheet and copy its ID
// 5. Replace 'YOUR_SPREADSHEET_ID' with your Google Sheet ID
// 6. Deploy as web app (Deploy > New deployment > Web app)
// 7. Select "Execute as" your account and "Who has access" as "Anyone"
// 8. Copy the deployment URL
// 9. Paste the URL in ContactForm.jsx as GOOGLE_APPS_SCRIPT_URL
//
// Expected fields from the contact form:
// name*, email*, organisation*, designation, country*, city*, state*, phoneNo*
// (asterisk = required on the frontend)

const SPREADSHEET_ID = "1xYq-BuikiFAMXE4sfTwr12teS8Ez2vaN72o5735FmOg"; // Replace with your Google Sheet ID
const SHEET_NAME = "PURBI Member Form Responses"; // Name of the sheet where data will be stored

function doPost(e) {
  try {
    // Parse the request body
    const data = JSON.parse(e.postData.contents);

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      const headers = [
        "Timestamp",
        "Name",
        "Email",
        "Organisation",
        "Designation",
        "Country",
        "City",
        "State",
        "Phone No",
      ];
      sheet.appendRow(headers);
    }

    // Prepare the data row
    const timestamp = new Date().toLocaleString();
    const newRow = [
      timestamp,
      data.name || "",
      data.email || "",
      data.organisation || "",
      data.designation || "",
      data.country || "",
      data.city || "",
      data.state || "",
      data.phoneNo || "",
    ];

    // Append the row to the sheet
    sheet.appendRow(newRow);

    // Optional: Send confirmation email
    sendConfirmationEmail(data.email, data.name);

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(email, name) {
  try {
    if (!email) return;

    const subject = "Welcome to PURBI International";
    const message = `Dear ${name},

Thank you for your interest in joining PURBI International!

We have received your submission and will get back to you shortly.

Best regards,
PURBI International Team`;

    GmailApp.sendEmail(email, subject, message, {
      name: "PURBI International",
    });
  } catch (error) {
    console.error("Email error:", error);
  }
}
