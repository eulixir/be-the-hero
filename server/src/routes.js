const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    nome: 'João Pedro Alves',
    evento: 'Semana OmniStack',
  });
});

module.exports = routes;
