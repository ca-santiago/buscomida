import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";
import { UpdateProductExtrasProps } from "../../domain/use-cases/product/update-product-extras";

interface SchemaValues extends Omit<UpdateProductExtrasProps, "pId"> {}

const schema = Joi.object<SchemaValues>().keys({
  extrasIds: Joi.array().items(Joi.string()).required(),
  extrasSectionsIds: Joi.array().items(Joi.string()).required(),
  order: Joi.array().items(Joi.string()).required(),
});

export const updateProductExtraRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const product = await productUseCases.updateExtras({
      pId: id,
      order: value.order,
      extrasIds: value.extrasIds,
      extrasSectionsIds: value.extrasSectionsIds,
    });
    res.status(200).json({ product });
    return;
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
