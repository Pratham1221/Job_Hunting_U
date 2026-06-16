const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const pool = require('./config/db');

app.use(cors());
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