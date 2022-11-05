import productMapper from "../../../mappers/product";
import { productService } from "../../../services";
import { Product } from "../../models/types";

export const saveProduct = (p: Product): Promise<any> => {
  return productService.save(productMapper.domainToDAO(p));
};
