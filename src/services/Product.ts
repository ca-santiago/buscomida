import { ProductDAO } from "../mappers/product/product.types";

const products: ProductDAO[] = [];

export type GetProductsCount = (
  offset: number,
  count: number
) => Promise<{
  pageCount: number;
  data: ProductDAO[];
}>;

const saveProduct = (p: ProductDAO) => {
  const existingOne = products.findIndex(({ id }) => p.id === id);
  if (existingOne > 0) {
    products[existingOne] = p;
  } else {
    products.push(p);
  }
  return Promise.resolve(true);
};

const getProductById = (pId: string): Promise<ProductDAO | null> => {
  return new Promise((res) => {
    const exist = products.find(({ id }) => pId === id);
    return res(exist || null);
  });
};

const getProductsCount: GetProductsCount = (offset, count) => {
  const prods = products.slice(offset, offset + count);
  const pageCount = Math.ceil(products.length / count);
  return Promise.resolve({
    data: prods,
    pageCount,
  });
};

const productService = {
  saveProduct,
  getProductById,
  getProductsCount,
};

export default productService;
