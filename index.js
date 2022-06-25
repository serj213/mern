import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

mongoose
  .connect('mongodb+srv://admin:12345@cluster0.rudtf.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB OK');
  })
  .catch((err) => {
    console.log('DB error  ', err);
  });

app.get('/', (req, res) => {
  res.send('тест снова');
});

app.post('/auth', (req, res) => {
  const token = jwt.sign(
    {
      login: req.body.login,
      password: req.body.password,
    },
    'Sergey213',
  );

  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('Всё робит');
});
