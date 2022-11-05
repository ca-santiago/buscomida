import { v4 } from "uuid";
import { Product } from "./types";

export const PRODUCT_RULES = {
  DISPLAY_NAME_MIN_LEN: 3,
  DISPLAY_NAME_MAX_LEN: 254,
  MAX_PRICE: 999,
};

export interface CreateProductProps {
  displayName: string;
  description: string;
  price: number;
}

const createDraftEmptyProduct = (props: CreateProductProps): Product => {
  const { description, displayName, price } = props;
  return {
    id: v4(),
    displayName,
    description,
    status: "DRAFT",
    createdAt: Date.now().toString(),
    extras: [],
    extrasSections: [],
    extrasListOrder: [],
    price,
    releaseDate: "",
  };
};

const productModel = {
  createDraftEmptyProduct,
};

export default productModel;
