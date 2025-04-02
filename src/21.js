let express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000);
