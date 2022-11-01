import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";

const schema = Joi.object().keys({
  extras: Joi.array().items(Joi.string()).required(),
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
      extraIds: value.extras,
      pId: id,
    });
    res.status(200).json({ product });
    return;
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
