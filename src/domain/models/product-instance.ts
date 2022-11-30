import { v4 } from "uuid";
import { ProductInstance } from "./types";

export const PRODUCT_RULES = {
  DISPLAY_NAME_MIN_LEN: 3,
  DISPLAY_NAME_MAX_LEN: 254,
  MAX_PRICE: 999,
};

export interface CreateProductInstanceProps {
  productId: string;
}

const createEmptyProductInstance = (
  props: CreateProductInstanceProps
): ProductInstance => {
  const { productId } = props;
  return {
    id: v4(),
    productId,
    checkoutDate: Date.now().toString(),
    sectionsDetails: [],
  };
};

const productInstanceModel = {
  createEmptyProductInstance,
};

export default productInstanceModel;
