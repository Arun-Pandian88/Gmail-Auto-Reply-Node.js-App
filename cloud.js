const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// Load client secrets from a file
const credentials = require('./credentials.json');

// Set up the OAuth2 client
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Set the token to the OAuth2 client
oAuth2Client.setCredentials({ /* Your saved token here */ });

// Create a Gmail API instance
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

// Function to list messages from the inbox
async function listMessages() {
  try {
    const response = await gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX'],
    });

    const messages = response.data.messages || [];
    return messages;
  } catch (error) {
    console.error('Error listing messages:', error.message);
    throw error;
  }
}

// Function to send a reply
async function sendReply(messageId) {
  try {
    const response = await gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      resource: {
        addLabelIds: ['SENT', 'Replied'], // Add labels as needed
        removeLabelIds: ['UNREAD'], // Remove labels as needed
      },
    });

    console.log('Reply sent:', response.data);
  } catch (error) {
    console.error('Error sending reply:', error.message);
    throw error;
  }
}

// Function to check and send replies
async function checkAndSendReplies() {
  const messages = await listMessages();

  for (const message of messages) {
    // Check if the message has been replied to
    const labels = message.labelIds || [];
    if (!labels.includes('Replied')) {
      // Send a reply
      await sendReply(message.id);
    }
  }
}

// Set up an interval to check and send replies every 45 to 120 seconds
setInterval(checkAndSendReplies, Math.floor(Math.random() * (120000 - 45000 + 1)) + 45000);
