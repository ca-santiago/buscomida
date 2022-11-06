import productMapper from "../../../mappers/product";
import { productService } from "../../../services";
import { Product } from "../../models/types";

export const getProductOrError = async (id: string): Promise<Product> => {
  const product = await productService
    .getById(id)
    .then((p) => (p ? productMapper.DAOtoDomain(p) : null));

  if (!product) {
    // TODO - Throw 404 error
    throw new Error("Product does not exist");
  }

  return product;
};
