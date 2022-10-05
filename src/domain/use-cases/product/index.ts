import { createNewProduct,  } from "./create-product";
import { getProductById } from "./get-by-id";

const productUseCases = {
    createNewProduct,
    getProductById,
}

export default productUseCases;
