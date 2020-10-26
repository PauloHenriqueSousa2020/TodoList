const express = require('express');

const todoController = require('../src/controllers/todoController');
const todoingController = require('../src/controllers/todoingController');
const completedTodoController = require('../src/controllers/completedTodoController');

const routes = express.Router();

routes.post('/todo', todoController.create);
routes.get('/todo', todoController.index);
routes.delete('/todo/:id', todoController.delete);

routes.post('/todoing', todoingController.create);
routes.get('/todoing', todoingController.index);
routes.delete('/todoing/:id', todoingController.delete);

routes.post('/completedtodo', completedTodoController.create);
routes.get('/completedtodo', completedTodoController.index);

module.exports = routes;