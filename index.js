
const nodemailer = require('nodemailer');

// Function to send an email
async function sendEmail(email, name) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dummy124321d@gmail.com',
            pass: 'spvyrpghpsmxesay'
        }
    });

    const mailOptions = {
        from: '124321@com',
        to: email,
        subject: 'Welcome to NodeJS app',
        text: `Hi ${name}, Thanks for Subscribing!`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return true; // Email sent successfully
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Error sending email
    }
}

module.exports = { sendEmail };