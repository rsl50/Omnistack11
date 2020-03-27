//importar funcionalidades do express para variável express
const express = require('express');

const app = express();

//adicionando rota para a aplicação e mensagem hello world
app.get('/', (request, response)=> {
    return response.send('Hello World');
});

//diz para a aplicação ouvir a porta 3333 do localhost
app.listen(3333);