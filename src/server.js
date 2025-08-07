// server.js

const express = require('express');
const cors = require('cors');
const { calculateDeal } = require('./calculate');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  try {
    const result = calculateDeal(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
