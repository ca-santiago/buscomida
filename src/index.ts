import express from "express";
import http from "http";
import morgan from "morgan";
import { extraEntriesRouter } from "./controllers/entra-entry";
import { extraRouter } from "./controllers/extra";
import { extraSectionsRouter } from "./controllers/extra-section";
import { productRouter } from "./controllers/product";

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));

// MIDDLEWARES
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

// ROUTERS
app.use("/products", productRouter);
app.use("/extras", extraRouter);
app.use("/extra-entries", extraEntriesRouter);
app.use("/extra-sections", extraSectionsRouter);

server.listen(5001, () => {
  console.log("Server running on port 5001");
});

// The business creates their Extra Items
// Add those extra items to extra groups
// Products have a reference of those
