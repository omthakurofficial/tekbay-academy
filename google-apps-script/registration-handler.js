/**
 * TekBay AWS Apprenticeship Registration Form Handler
 * Google Apps Script for collecting form submissions and sending email notifications
 * 
 * Instructions:
 * 1. Copy this entire code
 * 2. Go to script.google.com
 * 3. Create new project or open existing "TekBay Registration Handler"
 * 4. Replace all code with this content
 * 5. Save (Ctrl+S)
 * 6. Deploy as Web App:
 *    - Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 7. Copy the Web App URL and update in React code
 */

function doPost(e) {
  try {
    Logger.log('POST request received');
    Logger.log('Event object: ' + JSON.stringify(e));
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    let data;
    
    // Handle different ways data can come in
    if (e.postData && e.postData.contents) {
      Logger.log('Using postData.contents');
      data = JSON.parse(e.postData.contents);
    } else if (e.postData && e.postData.getDataAsString) {
      Logger.log('Using postData.getDataAsString()');
      data = JSON.parse(e.postData.getDataAsString());
    } else if (e.parameter) {
      Logger.log('Using parameter object');
      data = e.parameter;
    } else {
      throw new Error('No data received in request');
    }
    
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Clean phone number to prevent formula errors
    const phoneNumber = data.phoneNumber ? String(data.phoneNumber).replace(/[=+@-]/g, '') : 'N/A';
    
    // Append row with ALL form data including test center address
    const rowData = [
      new Date(), // A: Timestamp
      String(data.firstName || 'N/A'), // B: First Name
      String(data.middleName || 'N/A'), // C: Middle Name
      String(data.lastName || 'N/A'), // D: Last Name
      String(data.country || 'N/A'), // E: Country
      String(data.city || 'N/A'), // F: City
      String(data.state || 'N/A'), // G: State
      String(data.zipcode || 'N/A'), // H: Zipcode
      phoneNumber, // I: Phone Number (cleaned)
      String(data.email || 'N/A'), // J: Email
      String(data.educationLevel || 'N/A'), // K: Education Level
      String(data.degreeName || 'N/A'), // L: Degree Name
      String(data.learningPreference || 'N/A'), // M: Learning Preference
      String(data.testCenterState || 'N/A'), // N: Test Center State
      String(data.testCenterCity || 'N/A'), // O: Test Center City
      String(data.testCenterName || 'N/A'), // P: Test Center Name
      String(data.testCenterAddress || 'N/A') // Q: Test Center Address
    ];
    
    Logger.log('Row data to append: ' + JSON.stringify(rowData));
    sheet.appendRow(rowData);
    Logger.log('Row appended successfully');
    
    // Send email notification
    try {
      sendEmailNotification(data);
      Logger.log('Email notification sent successfully');
    } catch (emailError) {
      Logger.log('Email error: ' + emailError.toString());
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Registration received successfully',
      'timestamp': new Date().toISOString(),
      'rowsAdded': 1
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString(),
      'timestamp': new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  const recipient = 'apprenticeship@tekbay.digital';
  const subject = '🎓 New AWS Apprenticeship Application - ' + (data.firstName || 'Unknown') + ' ' + (data.lastName || 'User');
  
  const emailBody = `
New Registration for TekBay AWS Apprenticeship Program
========================================================

PERSONAL INFORMATION:
- Full Name: ${data.firstName || 'N/A'} ${data.middleName || ''} ${data.lastName || 'N/A'}
- First Name: ${data.firstName || 'N/A'}
- Middle Name: ${data.middleName || 'N/A'}
- Last Name: ${data.lastName || 'N/A'}

ADDRESS:
- Country: ${data.country || 'N/A'}
- City: ${data.city || 'N/A'}
- State: ${data.state || 'N/A'}
- Zipcode: ${data.zipcode || 'N/A'}

CONTACT:
- Phone Number: ${data.phoneNumber || 'N/A'}
- Email Address: ${data.email || 'N/A'}

EDUCATION:
- Level: ${data.educationLevel || 'N/A'}
- Degree Name: ${data.degreeName || 'N/A'}

LEARNING PREFERENCE:
- Interested in: ${data.learningPreference || 'N/A'}

TEST CENTER PREFERENCE (India):
- State: ${data.testCenterState || 'N/A'}
- City: ${data.testCenterCity || 'N/A'}
- Test Center Name: ${data.testCenterName || 'N/A'}
- Test Center Address: ${data.testCenterAddress || 'N/A'}

========================================================
Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

View all responses in Google Sheets:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

---
This registration was submitted through the TekBay website.
For any questions, contact: support@tekbay.digital
  `;
  
  try {
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: emailBody,
      replyTo: data.email || 'noreply@tekbay.digital'
    });
    Logger.log('Email sent successfully to ' + recipient);
  } catch (error) {
    Logger.log('Email error: ' + error.toString());
    throw error;
  }
}

// For testing the script
function doGet() {
  Logger.log('GET request received');
  return HtmlService.createHtmlOutput(`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="color: #232f3e;">✅ TekBay Registration Handler</h1>
      <p><strong>Status:</strong> Google Apps Script is working correctly!</p>
      <p><strong>Current time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      <p><strong>Function:</strong> This endpoint accepts POST requests to submit registration data.</p>
      <hr>
      <h3>Expected Data Format:</h3>
      <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">
{
  "firstName": "John",
  "middleName": "David",
  "lastName": "Doe",
  "country": "India",
  "city": "Bangalore",
  "state": "Karnataka",
  "zipcode": "560001",
  "phoneNumber": "9876543210",
  "email": "john@example.com",
  "educationLevel": "Bachelor's Degree",
  "degreeName": "Computer Science",
  "learningPreference": "In-person live classes",
  "testCenterState": "Karnataka",
  "testCenterCity": "Bengaluru",
  "testCenterName": "Test Center Name",
  "testCenterAddress": "Complete address here"
}
      </pre>
      <p><em>This page confirms that your Google Apps Script is deployed and accessible.</em></p>
    </div>
  `);
}

// Test function to manually add a row
function testAddRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const testData = [
    new Date(),
    'Manual',
    'Test',
    'User',
    'India',
    'Bangalore',
    'Karnataka',
    '560001',
    '9876543210',
    'manualtest@example.com',
    'Bachelor\'s Degree',
    'Computer Science',
    'In-person live classes',
    'Karnataka',
    'Bengaluru',
    'Test Center',
    'Test Address'
  ];
  
  sheet.appendRow(testData);
  Logger.log('Manual test row added successfully');
  
  // Also send test email
  const testEmailData = {
    firstName: 'Manual',
    middleName: 'Test',
    lastName: 'User',
    country: 'India',
    city: 'Bangalore',
    state: 'Karnataka',
    zipcode: '560001',
    phoneNumber: '9876543210',
    email: 'manualtest@example.com',
    educationLevel: 'Bachelor\'s Degree',
    degreeName: 'Computer Science',
    learningPreference: 'In-person live classes',
    testCenterState: 'Karnataka',
    testCenterCity: 'Bengaluru',
    testCenterName: 'Test Center',
    testCenterAddress: 'Test Address'
  };
  
  try {
    sendEmailNotification(testEmailData);
    Logger.log('Test email sent successfully');
  } catch (emailError) {
    Logger.log('Test email failed: ' + emailError.toString());
  }
}

// Function to check and create headers if needed
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Check if headers exist
  const firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  if (!firstRow[0] || firstRow[0] !== 'Timestamp') {
    // Headers don't exist, create them
    const headers = [
      'Timestamp',
      'First Name',
      'Middle Name', 
      'Last Name',
      'Country',
      'City',
      'State',
      'Zipcode',
      'Phone Number',
      'Email',
      'Education Level',
      'Degree Name',
      'Learning Preference',
      'Test Center State',
      'Test Center City',
      'Test Center Name',
      'Test Center Address'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#232f3e');
    headerRange.setFontColor('white');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    
    Logger.log('Headers created and formatted');
  }
}

// Function to get submission statistics
function getSubmissionStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    Logger.log('No submissions found');
    return {
      totalSubmissions: 0,
      latestSubmission: null
    };
  }
  
  const data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues();
  
  const stats = {
    totalSubmissions: data.length,
    latestSubmission: data.length > 0 ? data[data.length - 1][0] : null,
    submissionsByEducationLevel: {},
    submissionsByLearningPreference: {},
    submissionsByState: {}
  };
  
  // Analyze data
  data.forEach(row => {
    const educationLevel = row[10] || 'Unknown';
    const learningPreference = row[12] || 'Unknown';
    const testCenterState = row[13] || 'Unknown';
    
    stats.submissionsByEducationLevel[educationLevel] = (stats.submissionsByEducationLevel[educationLevel] || 0) + 1;
    stats.submissionsByLearningPreference[learningPreference] = (stats.submissionsByLearningPreference[learningPreference] || 0) + 1;
    stats.submissionsByState[testCenterState] = (stats.submissionsByState[testCenterState] || 0) + 1;
  });
  
  Logger.log('Submission statistics: ' + JSON.stringify(stats));
  return stats;
}