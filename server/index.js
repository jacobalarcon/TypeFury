const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
  res.json({ message: 'hello from the home page' });
});

app.get('/home', (req, res) => {
  res.json({ message: 'sent home file' });
});
