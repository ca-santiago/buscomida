import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import { productService } from "../../../services";

export const getProductById = async (
  id: string
): Promise<ProductPublicDTO | null> => {
  const product = await productService.getById(id);
  return product ? productMapper.DAOToDTO(product) : null;
};
