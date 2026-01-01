const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASS_USER,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // MUST be your email
      to: process.env.EMAIL_USER, // You receive the mail
      replyTo: email,             // User email for reply
      subject: subject,
      text: `
New Contact Message

From: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendMail;
