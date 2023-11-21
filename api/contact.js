// api/contact.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const PASS = process.env.PASS;

    // Configure nodemailer with your email provider
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: 'zachmhamilton@outlook.com',
        pass: PASS,
      },
    });

    // Define the email content
    const mailOptions = {
      from: `${email}`,
      to: 'zachmhamilton@outlook.com',
      subject: `${subject}` || 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
