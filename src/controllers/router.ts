import express from "express";
import { extraEntriesRouter } from "./extra-entry";
import { extrasRouter } from "./extra";
import { extraSectionsRouter } from "./extra-sections";
import { productsRouter } from "./products";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
import { loggerMiddleware } from "./middlewares/logger";

export const apiV1Router = express();

apiV1Router.use("/products", productsRouter);
apiV1Router.use("/extras", extrasRouter);
apiV1Router.use("/extra-entries", extraEntriesRouter);
apiV1Router.use("/extra-sections", extraSectionsRouter);

apiV1Router.use(loggerMiddleware);
apiV1Router.use(errorHandlerMiddleware);
