import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './router';

dotenv.config();

const app = express();
const { env: { PORT } } = process;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });