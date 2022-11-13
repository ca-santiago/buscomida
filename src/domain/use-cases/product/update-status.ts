import { ItemStatus, Product } from "../../models/types";
import { buildStatusManager } from "../status-manager";
import { getProductOrError } from "./product-or-error";
import { saveProduct } from "./save-product";

export interface UpdateProductStatusProps {
  pId: string;
  status: ItemStatus;
}

export const updateProductStatus = async ({
  pId,
  status,
}: UpdateProductStatusProps) => {
  const updateItemStatusTo = buildStatusManager<Product>();
  const product = await getProductOrError(pId);

  const updatedProduct = updateItemStatusTo(status, product);
  return await saveProduct(updatedProduct);
};
