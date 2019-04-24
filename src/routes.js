const express = require('express');
const multer  = require('multer')
const multerConfig = require('./config/muter');

const routes = express.Router();

const fileController  = require("./controllers/Filecontroller");
const boxController   = require("./controllers/Boxcontroller");


routes.post('/boxes',  boxController.store);
routes.get('/boxes',  boxController.getAll);
routes.get('/boxes/:id',  boxController.get);

routes.post('/boxes/:id/files', multer(multerConfig).single('file'),fileController.store)


module.exports = routes;