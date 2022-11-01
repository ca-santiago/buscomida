import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";

const schema = Joi.object().keys({
  displayName: Joi.string().min(1).max(120).required(),
  description: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

export const createProductRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const {
    value: { displayName, description, price },
    error,
  } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const product = await productUseCases.createNewProduct({
      displayName,
      description,
      price,
    });
    res.status(200).json({ product });
    return;
  } catch (err) {
    return res.status(500);
  }
};
