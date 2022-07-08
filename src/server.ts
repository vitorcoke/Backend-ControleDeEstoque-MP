import express, { json, NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

const PORT = process.env.PORT_SERVER || 3333;
const app = express();

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

app.use(json());
app.use(cors());
app.use(router);

app.listen(PORT);
