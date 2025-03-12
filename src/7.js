const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const randNum = Math.floor(Math.random() * 10);
  res.json({ message: `Hello from Node ${randNum}!` });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
