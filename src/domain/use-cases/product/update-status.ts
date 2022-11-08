import { ForbiddenError } from "../../errors";
import { ItemStatus, ItemStatusEnum, Product } from "../../models/types";
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
  if (!(status in ItemStatusEnum)) {
    // TODO: throw 400 standard error
    throw new Error("Invalid status value");
  }
  if (status !== "DRAFT") {
    throw new ForbiddenError();
  }
  const productStatusManager = buildStatusManager<Product>();
  const product = await getProductOrError(pId);

  const updatedProduct = productStatusManager(status, product);
  return await saveProduct(updatedProduct);
};
