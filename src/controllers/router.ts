import express from "express";
import { extraEntriesRouter } from "./extra-entry";
import { extrasRouter } from "./extra";
import { extraSectionsRouter } from "./extra-section";
import { productsRouter } from "./products";

export const apiV1Router = express();

apiV1Router.use("/products", productsRouter);
apiV1Router.use("/extras", extrasRouter);
apiV1Router.use("/extra-entries", extraEntriesRouter);
apiV1Router.use("/extra-sections", extraSectionsRouter);
