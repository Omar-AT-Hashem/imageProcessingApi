import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res):void => {
  res.send('main page');
});

app.use('/api', routes);

app.listen(PORT, ():void => {
  console.log(`Running on port ${PORT}`);
});

export default app;
