import { createNewProduct,  } from "./create-product";
import { getProductById } from "./get-by-id";
import { getProductList } from "./get-product-list";

const productUseCases = {
    createNewProduct,
    getProductById,
    getProductList,
}

export default productUseCases;
