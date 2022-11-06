import express from "express";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProductsRoute } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
import { updateProductContentRoute } from "./update-content";
import { updateProductStatusRoute } from "./update-status";

export const productsRouter = express();

productsRouter.put("/:id/extras", updateProductExtraRoute);

productsRouter.put("/:id/content", updateProductContentRoute);

productsRouter.put("/:id/status", updateProductStatusRoute);

productsRouter.get("/:id", getProductByIdRoute);

productsRouter.post("/", createProductRoute);

productsRouter.get("/", getProductsRoute);
