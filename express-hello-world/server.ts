import express from 'express';

const app = express();
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  console.log('Method: ', req.method);
  res.send('Hello, World!');
  next();
});
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
