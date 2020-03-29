/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no banck-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Excluir uma informação no back-end
 */

 /**
  * Tipo de parâmetros:
  * 
  * Query Params: Parâmetros nomeados após a rota iniciando com "?"(/Users?name=Forlini)
  * Route Params: Parâmetros utilizados para identificar um único recurso (/Users/:id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar uma informação
  */
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;