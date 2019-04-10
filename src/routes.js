const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');
const BoxController = require('../src/controllers/BoxController');
const FileController = require('../src/controllers/FileController');

// cria as rotas
const routes = express.Router();

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
  '/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store
);

// exporta alguma informação do arquivo
// no caso routes
module.exports = routes;
