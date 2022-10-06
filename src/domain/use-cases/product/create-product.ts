import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import productService from "../../../services/product";
import productModel from "../../models/product";

export interface CreateNewProductProps {
  displayName: string;
  description: string;
  price: number;
}

/**
 * Creates a new empty product as a draft
 */
export const createNewProduct = async ({
  description,
  displayName,
  price
}: CreateNewProductProps): Promise<ProductPublicDTO> => {
  const product = productModel.createDraftEmptyProduct({
    description,
    displayName,
    price
  });
  await productService.saveProduct(productMapper.domainToDAO(product));

  return productMapper.domainToDTO(product);
};
