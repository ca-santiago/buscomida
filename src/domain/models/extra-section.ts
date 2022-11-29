import { v4 } from "uuid";
import { ExtraSection } from "./types";

export interface CreateDraftExtraSectionProps {
  title: string;
  titlePrefix: string;
  description: string;
  maxSelection: number;
  minSelection: number;
  showFirstItemName: boolean;
}

const createDraft = ({
  description,
  maxSelection,
  minSelection,
  title,
  titlePrefix,
  showFirstItemName,
}: CreateDraftExtraSectionProps): ExtraSection => {
  return {
    id: v4(),
    status: "DRAFT",
    description,
    releaseDate: "",
    title,
    titlePrefix,
    extras: [],
    createdAt: Date.now().toString(),
    maxSelection,
    minSelection,
    showFirstItemName,
  };
};

const extraSectionModel = {
  createDraft,
};

export default extraSectionModel;
