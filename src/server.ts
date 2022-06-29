import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";
import cors from "cors";

const PORT = process.env.PORT_SERVER || 3333;

const app = express();

app.use(json());
app.use(cors());
app.use(router);

app.listen(PORT, async () => {
  await db.sync();
  console.log(`Rodando na port ${PORT}`);
});
