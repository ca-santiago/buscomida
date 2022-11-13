import productMapper from "../../../mappers/product";
import { productService } from "../../../services";
import { NotFound } from "../../errors";
import { Product } from "../../models/types";

export const getProductOrError = async (id: string): Promise<Product> => {
  const product = await productService
    .getById(id)
    .then((p) => (p ? productMapper.DAOtoDomain(p) : null));

  if (!product) {
    throw new NotFound();
  }

  return product;
};
