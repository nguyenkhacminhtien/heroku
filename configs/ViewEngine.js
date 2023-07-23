import express from 'express'

const conFigViewEngine = (app) => {
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
}

export default conFigViewEngine;