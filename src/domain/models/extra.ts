import { v4 } from "uuid";
import { Extra } from "./types";

export interface CreateExtraProps {
  displayName: string;
  description: string;
  addedPrice: number;
}

const createDraftEmptyExtra = (props: CreateExtraProps): Extra => {
  const { description, displayName, addedPrice } = props;
  return {
    id: v4(),
    displayName,
    description,
    status: "DRAFT",
    addedPriceByUnit: addedPrice,
    createdAt: Date.now().toString(),
    publishedAt: ''
  };
};

const extraModel = {
  createDraftEmptyExtra,
};

export default extraModel;
