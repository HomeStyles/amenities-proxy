const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 4567;

app.use(cors());
app.use(express.static('/client/src'));

app.get('/', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(port, () => console.log(`CORS-enabled web server listening on ${port}`));