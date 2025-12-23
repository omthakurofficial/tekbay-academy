/**
 * TekBay Academy Webinar Registration Handler
 * Google Apps Script for collecting webinar form submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Create new project named "TekBay Webinar Handler"
 * 3. Replace all code with this script
 * 4. Update SPREADSHEET_ID below with your Google Sheets ID
 * 5. Update EMAIL_RECIPIENT with your notification email
 * 6. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 7. Copy the deployment URL to use in React component
 */

// CONFIGURATION - UPDATE THESE VALUES
const SPREADSHEET_ID = '1your-spreadsheet-id-here'; // Replace with your Google Sheets ID
const EMAIL_RECIPIENT = 'apprenticeship@tekbay.digital'; // Replace with your email

/**
 * Main function that handles POST requests from the webinar form
 */
function doPost(e) {
  try {
    console.log('📥 Webinar registration received');
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    console.log('📋 Parsed data:', data);
    
    // Validate required fields
    if (!data.fullName || !data.email) {
      throw new Error('Missing required fields: fullName or email');
    }
    
    // Get or create the webinar sheet
    const sheet = getOrCreateWebinarSheet();
    
    // Prepare data for the sheet
    const timestamp = new Date();
    const istTime = Utilities.formatDate(timestamp, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    
    const rowData = [
      istTime,                    // Timestamp
      data.fullName || '',        // Full Name
      data.email || '',           // Email
      data.mobile || 'Not provided', // Mobile
      'AI Careers 2026 Webinar', // Event Type
      'Registered'                // Status
    ];
    
    // Add data to sheet
    sheet.appendRow(rowData);
    console.log('✅ Data added to webinar sheet');
    
    // Send email notification
    sendWebinarEmailNotification(data, istTime);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Webinar registration submitted successfully',
      timestamp: istTime
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('❌ Error processing webinar registration:', error);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Get existing webinar sheet or create a new one with headers
 */
function getOrCreateWebinarSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName('Webinar Registrations');
    
    if (!sheet) {
      // Create new sheet
      sheet = spreadsheet.insertSheet('Webinar Registrations');
      
      // Add headers
      const headers = [
        'Timestamp (IST)',
        'Full Name', 
        'Email', 
        'Mobile', 
        'Event Type',
        'Status'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#201d3f');
      headerRange.setFontColor('white');
      headerRange.setHorizontalAlignment('center');
      
      // Set column widths
      sheet.setColumnWidth(1, 180); // Timestamp
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 250); // Email
      sheet.setColumnWidth(4, 150); // Mobile
      sheet.setColumnWidth(5, 200); // Event Type
      sheet.setColumnWidth(6, 120); // Status
      
      console.log('✅ Created new webinar sheet with headers');
    }
    
    return sheet;
  } catch (error) {
    console.error('❌ Error accessing spreadsheet:', error);
    throw new Error(`Failed to access spreadsheet: ${error.message}`);
  }
}

/**
 * Send email notification for new webinar registration
 */
function sendWebinarEmailNotification(data, timestamp) {
  try {
    const subject = '🎯 New Webinar Registration - AI Careers 2026';
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #201d3f 0%, #464d82 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🎯 New Webinar Registration</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">AI Careers in 2026 - Unlock Your Future in AI</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #201d3f; margin-top: 0;">Registration Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: white;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">📝 Full Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${data.fullName}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">📧 Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${data.email}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">📱 Mobile</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${data.mobile || 'Not provided'}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">⏰ Registration Time</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${timestamp}</td>
            </tr>
          </table>
          
          <div style="background: #e3f2fd; padding: 20px; border-left: 4px solid #2196f3; margin: 20px 0;">
            <p style="margin: 0; color: #1565c0;">
              <strong>Next Steps:</strong> Follow up with this lead within 24 hours for maximum engagement.
            </p>
          </div>
        </div>
        
        <div style="background: #201d3f; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 12px; opacity: 0.8;">
            This is an automated notification from TekBay Academy webinar registration system.
          </p>
        </div>
      </div>
    `;
    
    // Send HTML email
    GmailApp.sendEmail(
      EMAIL_RECIPIENT, 
      subject, 
      '', // Plain text body (empty since we're using HTML)
      {
        htmlBody: htmlBody,
        name: 'TekBay Academy Webinar System'
      }
    );
    
    console.log('✅ Email notification sent');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Don't throw error here - form submission should still succeed
  }
}

/**
 * Handle GET requests (for testing the script)
 */
function doGet() {
  const testTime = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
  
  return HtmlService.createHtmlOutput(`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 30px; border: 1px solid #ddd; border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #201d3f; margin: 0;">✅ TekBay Webinar Handler</h1>
        <p style="color: #666; margin: 10px 0 0;">Google Apps Script is Active & Ready</p>
      </div>
      
      <div style="background: #f0f8ff; padding: 20px; border-radius: 6px; margin: 20px 0;">
        <p><strong>📊 Status:</strong> <span style="color: #28a745;">Ready to receive webinar registrations</span></p>
        <p><strong>⏰ Current Time (IST):</strong> ${testTime}</p>
        <p><strong>📧 Notifications:</strong> ${EMAIL_RECIPIENT}</p>
        <p><strong>📋 Sheet:</strong> Webinar Registrations</p>
      </div>
      
      <div style="background: #fff3cd; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p style="margin: 0; color: #856404;">
          <strong>⚠️ Next Steps:</strong> Copy this script's deployment URL and add it to your React component.
        </p>
      </div>
    </div>
  `);
}

/**
 * Test function to verify script setup
 */
function testScript() {
  try {
    console.log('🧪 Testing webinar script...');
    
    // Test data
    const testData = {
      fullName: 'Test User',
      email: 'test@example.com', 
      mobile: '9876543210'
    };
    
    // Test sheet creation
    const sheet = getOrCreateWebinarSheet();
    console.log('✅ Sheet access successful');
    
    // Test email (comment out if you don't want test email)
    // sendWebinarEmailNotification(testData, new Date().toLocaleString('en-IN'));
    
    console.log('✅ Script test completed successfully');
    return 'Test completed successfully';
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return `Test failed: ${error.message}`;
  }
}