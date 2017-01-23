import express from 'express';
const app = express();

app.use('/test', (req, res) => {
  res.status(200).send({msg: 'hello'})
});

app.use('/', express.static('public'));

app.listen(8080, () => {
  console.log('Server listening on 8080');
});
