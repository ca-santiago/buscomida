import express from "express";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProducts } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
export * from "./udpate-extras";

export const productRouter = express();

productRouter.patch("/:id", updateProductExtraRoute);

productRouter.get("/:id", getProductByIdRoute);

productRouter.post("/", createProductRoute);

productRouter.get("/", getProducts);
