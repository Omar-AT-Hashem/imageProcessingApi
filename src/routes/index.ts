import express from 'express';
import imageProcessor from './api/imageProcessor';

const api = express.Router();

api.get('/', (req, res) => {
  res.send('main api route');
});

api.use('/imageProcessor', imageProcessor);

export default api;
