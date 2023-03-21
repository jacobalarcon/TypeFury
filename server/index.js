const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'hello from from get request land' });
});

app.listen(PORT, () => {
  console.log(`'Server listening on ${PORT}`);
});
