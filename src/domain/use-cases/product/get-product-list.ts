import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/product/product.types";
import productService from "../../../services/product";

interface GetProductListResult {
  data: ProductPublicDTO[];
  page: number;
  count: number;
  pageCount: number;
}

export const getProductList = async (
  page = 1,
  count = 10
): Promise<GetProductListResult> => {
  const _page = Math.max(1, page);
  const _count = Math.max(10, Math.min(count, 50));
  const { data, pageCount } = await productService.getProductsCount(
    (_page - 1) * _count,
    _count
  );
  return {
    data: data.map(productMapper.DAOToDTO),
    page: _page,
    count: _count,
    pageCount,
  };
};
