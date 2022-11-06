import { createNewProduct } from "./create-product";
import { getProductById } from "./get-by-id";
import { getProductList } from "./get-product-list";
import { updateProductContent } from "./update-content";
import { updateProductExtras } from "./update-product-extras";
import { updateProductStatus } from "./update-status";

const productUseCases = {
  createNewProduct,
  getProductById,
  getProductList,
  updateExtras: updateProductExtras,
  updateContent: updateProductContent,
  updateStatus: updateProductStatus,
};

export default productUseCases;
