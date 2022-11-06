import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import { productService } from "../../../services";
import { Product } from "../../models/types";

export const saveProduct = async (p: Product): Promise<ProductPublicDTO> => {
  await productService.save(productMapper.domainToDAO(p));
  return productMapper.domainToDTO(p);
};
