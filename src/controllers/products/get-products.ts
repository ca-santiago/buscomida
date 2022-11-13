import express from "express";
import productUseCases from "../../domain/use-cases/product";
import { listJoiQuery } from "../helpers/list-validator";

export const getProductsRoute = async (
  req: express.Request,
  res: express.Response
) => {
  let count;
  let page;

  if (req.query.page || req.query.count) {
    const { error, value } = listJoiQuery.validate(req.query);
    if (error) {
      return res.status(400).json(error.message);
    }
    page = value.page;
    count = value.count;
  }

  const products = await productUseCases.getProductList(page, count);
  res.status(200).json(products);
};
