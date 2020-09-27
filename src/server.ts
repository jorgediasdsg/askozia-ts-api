import express from 'express';
import routes from './routes';

const app = express();
app.get('/', (request, response) =>
  response.json({
    message: 'Hi Jorge!',
  }),
);
app.listen(3333, () => {
  console.log('🚀 Server start on port 3333');
});
