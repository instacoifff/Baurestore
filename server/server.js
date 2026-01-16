const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Storage
// Vercel only allows writing to /tmp
const isVercel = process.env.VERCEL === '1';
const uploadDir = isVercel ? '/tmp/uploads' : path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Nur Bilder sind erlaubt!'));
        }
    }
});

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/contact', upload.array('image-upload', 10), async (req, res) => {
    try {
        const { name, phone, email, 'damage-type': damageType, message } = req.body;
        const files = req.files;

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'info@baurestore.de',
            replyTo: email,
            subject: `Neue Anfrage von ${name}: ${damageType}`,
            html: `
                <h3>Neue Anfrage über das Kontaktformular</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Schadensart:</strong> ${damageType}</p>
                <p><strong>Nachricht:</strong></p>
                <blockquote>${message}</blockquote>
                <p><strong>Anzahl Bilder:</strong> ${files.length}</p>
            `,
            attachments: files.map(file => ({
                filename: file.originalname,
                path: file.path
            }))
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
    }
});

if (!isVercel) {
    app.use(express.static(path.join(__dirname, '../dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
