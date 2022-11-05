import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";
import { UpdateProductContentArgs } from "../../domain/use-cases/product/update-content";

interface SchemaValues extends Omit<UpdateProductContentArgs, "pId"> {}

const schema = Joi.object<SchemaValues>().keys({
  displayName: Joi.string().min(3).exist(),
  description: Joi.string().min(3).exist(),
  price: Joi.number().min(0).exist(),
});

export const updateProductContentRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const { description, displayName, price } = value;
    const product = await productUseCases.updateContent({
      pId: id,
      description,
      displayName,
      price,
    });
    res.status(200).json({ product });
    return;
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
