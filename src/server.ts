import express, { json } from 'express';
import { db } from './database/db';
import { router } from './routes';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors())
app.use(router);


app.listen(3333, async () => {
  await db.sync();
  console.log('rodando na porta 3333')
});

