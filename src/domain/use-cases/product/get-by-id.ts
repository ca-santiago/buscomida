import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/product/product.types";
import productService from "../../../services/product";

export const getProductById = async (id: string): Promise<ProductPublicDTO | null> => {
  const product = await productService.getProductById(id);

  if(product) {
      return productMapper.DAOToDTO(product);
  } else {
    return null;    
  }
};
