import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './router';
import cors from 'cors';

dotenv.config();

const app = express();
const { env: { PORT } } = process;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('gtfo 🖕');
});

app.use(router);

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });