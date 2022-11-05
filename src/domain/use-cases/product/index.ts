import { createNewProduct } from "./create-product";
import { getProductById } from "./get-by-id";
import { getProductList } from "./get-product-list";
import { updateProductExtras } from "./update-product-extras";
import { updateProductExtrasSections } from "./update-extra-sections";

const productUseCases = {
  createNewProduct,
  getProductById,
  getProductList,
  updateExtras: updateProductExtras,
  updateExtrasSections: updateProductExtrasSections,
};

export default productUseCases;
