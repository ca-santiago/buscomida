import express from "express";
import { extraEntriesRouter } from "./extra-entry";
import { extraRouter } from "./extra";
import { extraSectionsRouter } from "./extra-section";
import { productRouter } from "./products";

export const apiV1Router = express();

apiV1Router.use("/products", productRouter);
apiV1Router.use("/extras", extraRouter);
apiV1Router.use("/extra-entries", extraEntriesRouter);
apiV1Router.use("/extra-sections", extraSectionsRouter);
