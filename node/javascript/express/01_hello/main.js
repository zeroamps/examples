const express = require('express');
const { persons } = require('../shared/data');

const app = express();

app.get('/', (req, res) => {
  res.json(persons);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
