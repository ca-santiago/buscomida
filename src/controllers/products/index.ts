import express from "express";
import Joi from "joi";
import { validatePatchRequestBody } from "../helpers/patch";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProductsRoute } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
export * from "./udpate-extras";

export const productsRouter = express();

productsRouter.patch("/:id/extras", updateProductExtraRoute);

productsRouter.patch("/:id", (req, res) => {
  const { error, value } = validatePatchRequestBody(req.body);
  if (error) {
    return res.status(404).send(error.message).end();
  }

  res.send({ value });
});

productsRouter.patch("/:id/extra-sections", updateProductExtraRoute);

productsRouter.get("/:id", getProductByIdRoute);

productsRouter.post("/", createProductRoute);

productsRouter.get("/", getProductsRoute);
