import express from 'express';

const imageProcessor = express.Router();

imageProcessor.get('/', (req, res) => {
  res.send('image processor');
});

export default imageProcessor;

