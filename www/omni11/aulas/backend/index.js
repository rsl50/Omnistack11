//importar funcionalidades do express para variável express
const express = require('express');

const app = express();

app.use(express.json());

//adicionando rota para a aplicação e mensagem hello world
// rotas são recursos a serem acessados
/** 
 * Métodos HTTP:
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar uma informação no back-end
*/
    
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar a recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

app.post('/users/', (request, response)=> {
    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Robson Lima'
    });
});

//diz para a aplicação ouvir a porta 3333 do localhost
app.listen(3333);