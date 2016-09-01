const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(9003, function () {
  console.log('listening on port 9003')
});