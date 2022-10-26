import { v4 } from "uuid";
import { ExtraEntrySection } from "./types";

export interface CreateDraftExtraSectionProps {
  title: string;
  titlePrefix: string;
  description: string;
  maxSelection: number;
  minSelection: number;
}

const createDraft = ({
  description,
  maxSelection,
  minSelection,
  title,
  titlePrefix,
}: CreateDraftExtraSectionProps): ExtraEntrySection => {
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
  };
};

const extraSectionModel = {
  createDraft,
};

export default extraSectionModel;
