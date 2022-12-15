import express from 'express';
import imageProcessor from './api/imageProcessor';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api route');
});

routes.use('/imageProcessor', imageProcessor);

export default routes;