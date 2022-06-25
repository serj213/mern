import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { registerValidator } from './Validators/auth.js';
import { validationResult } from 'express-validator';

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

app.post('/auth/register', registerValidator, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({
    success: true,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('Всё робит');
});
