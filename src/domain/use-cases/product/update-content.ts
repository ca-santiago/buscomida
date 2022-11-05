import productMapper from "../../../mappers/product";
import { Product } from "../../models/types";
import { getProductOrError } from "./product-or-error";
import { saveProduct } from "./save-product";

export interface UpdateProductContentArgs {
  pId: string;
  description: string;
  displayName: string;
  price: number;
}

export const updateProductContent = async ({
  pId,
  price,
  description,
  displayName,
}: UpdateProductContentArgs) => {
  const product = await getProductOrError(pId);

  if (product.status !== "DRAFT") {
    // TODO - Throw 403 standard error
    throw new Error("Cannot update this product");
  }

  const updatedProduct: Product = {
    ...product,
    displayName,
    description,
    price,
  };

  saveProduct(updatedProduct);
  return productMapper.domainToDTO(updatedProduct);
};
