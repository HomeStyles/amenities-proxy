const express = require('express');
const app = express();
const port = 4567;

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('GET request received');
});

app.listen(port, () => console.log(`Listening on ${port}`));