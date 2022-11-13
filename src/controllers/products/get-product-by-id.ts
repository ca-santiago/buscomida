import express from "express";
import productUseCases from "../../domain/use-cases/product";

export const getProductByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const product = await productUseCases.getProductById(id);

  if (product) {
    res.status(200).json({ product });
  } else {
    res.status(404).end();
  }
};
