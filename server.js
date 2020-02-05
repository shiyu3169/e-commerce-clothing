const express = require('express');
const cors = require('cors');
const path = require('path');

if (process.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// app.use(cors());

if (process.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);
});
