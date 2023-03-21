const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
  return res.json({ message: 'hello from the u page' });
});

app.get('/home', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});
