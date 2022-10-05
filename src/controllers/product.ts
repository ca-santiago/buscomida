import express from "express";
import productUseCases from "../domain/use-cases/product";
import Joi from "joi";
import { CreateNewProductProps } from "../domain/use-cases/product/create-product";

export const productRouter = express();

const productPortRequest = Joi.object().keys({
  displayName: Joi.string().min(1).max(120).required(),
  description: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

productRouter.post("/", async (req, res) => {
  const {
    value: { displayName, description, price },
    error,
  } = productPortRequest.validate(req.body);

  if (error) {
    return res.status(404).send(error.message);
  }

  try {
    const product = await productUseCases.createNewProduct({
      displayName,
      description,
      price,
    });
    res.status(200).json({product});
    return;
  } catch (err) {
    return res.status(500);
  }
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productUseCases.getProductById(id);

    if (product) {
      return res.status(200).json({product});
    } else {
      return res.status(404);
    }
  } catch (err) {
    return res.status(500);
  }
});
