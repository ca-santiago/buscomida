import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";

const schema = Joi.object().keys({
  page: Joi.number(),
  count: Joi.number(),
});

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  let count;
  let page;
  if (req.query.page || req.query.count) {
    const { error, value } = schema.validate(req.query);
    if (error) {
      return res.status(400).json(error.message);
    }
    page = value.page;
    count = value.count;
  }

  const products = await productUseCases.getProductList(page, count);
  res.status(200).json(products);
};
