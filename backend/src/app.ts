import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";

import { envValidator } from "./middlewares/validation/envValidator";
import { v1Router } from "./routes";

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === "production" ? ".procution.env" : ".env"),
});
envValidator();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(".api/n1", v1Router);

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`${process.env.BACKEND_PORT}포트에 정상적으로 백엔드 서버를 시작하였습니다.`);
});
