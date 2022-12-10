import express from 'express';
import api from './routes/index'

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('main page');
});

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
