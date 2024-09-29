const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const client_id = ''
const client_secret = ''
const redirect_uri = ''
const refresh_token = ''

async function authorize() {
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
    oAuth2Client.setCredentials({refresh_token: refresh_token});

    return oAuth2Client;
}

async function getOTP(auth) {
    const gmail = google.gmail({ version: 'v1', auth });
    
    try {
        // Fetch the latest emails
        const res = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 10,
            q: 'subject:OTP' // Adjust this query based on your requirements
        });

        const messages = res.data.messages;
        if (messages.length) {
            const message = await gmail.users.messages.get({
                userId: 'me',
                id: messages[0].id,
                format: 'full',
            });

            const emailBody = message.data.payload.parts[0].body.data;
            const decodedBody = Buffer.from(emailBody, 'base64').toString('utf-8');

            // Extract OTP using regex (adjust regex based on your OTP format)
            const otpMatch = decodedBody.match(/Your OTP is: (\d+)/);
            if (otpMatch) {
                return otpMatch[1]; // Return OTP
            }
        }
    } catch (error) {
        console.error('Error retrieving emails:', error);
    }
    return null;
}

module.exports = { authorize, getOTP };
