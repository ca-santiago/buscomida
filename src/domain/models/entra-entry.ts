import { v4 } from "uuid";
import { ExtraEntry } from "./types";

export interface CreateDraftExtraEntryProps {
  title: string;
  titlePrefix: string;
  addedPrice: number;
  extraId: string;
  maxSelection: number;
  minSelection: number;
}

const createDraftEmptyExtraEntry = ({
  addedPrice,
  extraId,
  maxSelection,
  minSelection,
  title,
  titlePrefix,
}: CreateDraftExtraEntryProps): ExtraEntry => {
  return {
    id: v4(),
    status: "DRAFT",
    addedPrice,
    extraId,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
    createdAt: Date.now().toString(),
  };
};

const extraEntryModel = {
  createDraftEmptyExtraEntry,
};

export default extraEntryModel;
