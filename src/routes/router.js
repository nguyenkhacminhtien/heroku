const express = require('express');
const router = express.Router();
import { json } from 'body-parser';
import homeController from '../controller.js/homeController';
function routers (app) {
     router.get('/', homeController.home);


    return app.use('/', router);
}

export default routers;