const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json({message: 'Hello Worls'});
});

app.listen(3333);