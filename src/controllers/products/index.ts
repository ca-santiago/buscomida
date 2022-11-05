import express from "express";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProductsRoute } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
import { updateProductContentRoute } from "./update-content";

export const productsRouter = express();

productsRouter.put("/:id/extras", updateProductExtraRoute);

productsRouter.put("/:id/content", updateProductContentRoute);

productsRouter.get("/:id", getProductByIdRoute);

productsRouter.post("/", createProductRoute);

productsRouter.get("/", getProductsRoute);
