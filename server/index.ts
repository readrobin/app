import express from 'express';

const server = express();

// eslint-disable-next-line no-magic-numbers
server.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 5000');
});

server.get('/', (req, res) => {
  res.send('Awesome! We\'re live debugging this!');
});

server.get('/test', (req, res) => {
  res.send('This is a test');
});
