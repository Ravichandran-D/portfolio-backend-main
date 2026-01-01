const nodemailer = require("nodemailer");

// Load environment variables from .env file
require("dotenv").config();

// Function to send email using Nodemailer
const sendMail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
        service: "gmail", // Or use other services like 'outlook', 'yahoo', etc.
        auth: {
            user: process.env.EMAIL_USER,  // Make sure your .env file has the correct values
            pass: process.env.PASS_USER   // App Password if 2FA is enabled
        }
    });

    // Define mail options
    const mailOptions = {
        from: email,  // Sender's email
        to: process.env.EMAIL_USER,  // Your email address to receive the message
        subject,
        text: message
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log("Mail sent to", process.env.EMAIL_USER);
    } catch (error) {
        // Log any errors that occur
        console.log("Error sending email:", error.message);
    }
}

module.exports = sendMail;
