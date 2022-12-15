import express, { Request, Response } from 'express';
import imageProcessor from './api/imageProcessor';

const routes = express.Router();

routes.get('/', (req:Request, res:Response):void => {
  res.status(200).send('main api route');
});

routes.use('/imageProcessor', imageProcessor);

export default routes;
