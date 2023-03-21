const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/home', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`'Server listening on ${PORT}`);
});
