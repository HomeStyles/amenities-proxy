const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 4567;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('client'));

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on ${port}`);
});