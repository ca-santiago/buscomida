import { ProductDAO } from "../mappers/product/product.types";

const products: ProductDAO[] = [];

const productService = {
  saveProduct(p: ProductDAO) {
    const existingOne = products.findIndex(({ id }) => p.id === id);
    if (existingOne > 0) {
      products[existingOne] = p;
    } else {
      products.push(p);
    }
    return Promise.resolve(true);
  },
  getProductById(pId: string): Promise<ProductDAO | null> {
    return new Promise((res) => {
      const exist = products.find(({ id }) => pId === id);
      return res(exist || null);
    });
  },
};

export default productService;
