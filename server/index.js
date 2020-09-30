const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ nome: 'João Pedro Alves' });
});

app.listen(3333);
