import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname, '../', 'dist')));

server.get('/', (_, res) => {
  res.send('Awesome! We\'re live debugging this!');
});

server.get('/test', (_, res) => {
  res.send('This is a test');
});

server.listen(5000, () => {
  console.info('listening on port 5000');
});
