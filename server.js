const express = require('express');
const cors = require("cors")
const bodyParse = require("body-parser")
const nodemailer = require('./nodemailer/nodemailer');

const app = express();
const PORT = 5000;

// middlewares
app.use(bodyParse.json())
app.use(cors());

app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).send({
            success: false,
            message: "Missing required fields"
        });
    }

    try {
        await nodemailer(email, `Message From ${name}`, `You have received a new message from ${name} (${email}):\n\n${message}`);

        res.status(200).send({
            success: true,
            message: "Thank you for reaching out! Your message has been sent"
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Failed to send email"
        });
    }
})

app.listen(PORT, () => {
    console.log(`server is running on the port: http://localhost:${PORT}`);
})