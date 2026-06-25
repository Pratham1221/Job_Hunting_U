const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const app = express();
const PORT = process.env.PORT || 3001;
const pool = require('./config/db');

app.use(cors({
  origin: [
    'https://jobhuntingu.com',
    'https://www.jobhuntingu.com'
  ]
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/contact', async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      job_title,
      service,
      preferred_contact,
      message
    } = req.body;

    const sql = `
      INSERT INTO contact_form
      (full_name, email, phone, job_title, service, preferred_contact, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      full_name,
      email,
      phone || null,
      job_title || null,
      service || null,
      preferred_contact || 'email',
      message || null
    ];

    const [result] = await pool.execute(sql, values);

    // Integrate with Systeme.io
    try {
      const systemeApiKey = process.env.SYSTEME_API_KEY;
      if (systemeApiKey) {
        // Split full_name into first and last name
        const nameParts = (full_name || '').trim().split(/\s+/);
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const systemeResponse = await fetch('https://api.systeme.io/api/contacts', {
          method: 'POST',
          headers: {
            'X-API-Key': systemeApiKey,
            'accept': 'application/json',
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            fields: [
              {
                slug: 'first_name',
                value: firstName
              },
              {
                slug: 'surname',
                value: lastName
              },
              {
                "slug": "phone_number",
                "value": phone || ''
              }
            ]
          })
        });

        if (!systemeResponse.ok) {
          const errorData = await systemeResponse.json();
          console.error('Systeme.io API Error:', errorData);
        } else {
          console.log('Successfully synced to Systeme.io');
        }
      }
    } catch (systemeErr) {
      console.error('Failed to sync with Systeme.io:', systemeErr.message);
      // We don't want to fail the whole request if Systeme.io sync fails
    }

    res.json({
      success: true,
      id: result.insertId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});