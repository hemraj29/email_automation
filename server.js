const bodyParser = require('body-parser');
const express = require('express');
const {sendEmail} = require('./index.js')


const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/submit', async (req, res) => {
    const { email, name } = req.body;

    const emailSent = await sendEmail(email, name); // Call the sendEmail function

    if (emailSent) {
        const successMessage = '<div style="text-align: center;"><h2>Email sent successfully!</h2><p>Thank you for subscribing. Click <a href="/">here</a> to go back to the form.</p></div>';
        res.sendFile(__dirname + '/sucess.html')
    } else {
        res.status(500).send('Error sending email');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});