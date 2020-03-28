//importar funcionalidades do express para variável express
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

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

 /**
  * Bancos de Dados
  * SQL: MySQL, SQLite, PostgreeSQL, Oracle, MS SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


