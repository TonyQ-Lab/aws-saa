const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Back-end is Running!' });
});

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
