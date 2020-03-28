const express = require('express');

const routes = express.Router();

routes.post('/users/', (request, response)=> {
    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Robson Souza'
    });
});

module.exports = routes;