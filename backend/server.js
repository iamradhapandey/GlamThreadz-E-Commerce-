import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to GlamThreadz E-Commerce Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});