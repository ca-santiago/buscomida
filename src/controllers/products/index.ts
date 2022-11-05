import express from "express";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProductsRoute } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
export * from "./udpate-extras";

export const productsRouter = express();

productsRouter.patch("/:id/extras", updateProductExtraRoute);

productsRouter.get("/:id", getProductByIdRoute);

productsRouter.post("/", createProductRoute);

productsRouter.get("/", getProductsRoute);
