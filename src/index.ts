import express from "express";
import http from "http";
import morgan from "morgan";
import { apiV1Router } from "./controllers/router";
import { startMongoConnection } from "./server/mongodb";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));

// MIDDLEWARES
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

// Register v1 router
app.use(apiV1Router);

const main = async () => {
  await startMongoConnection();
  server.listen(5001, () => console.log("Server running on port 5001"));
};

main();
