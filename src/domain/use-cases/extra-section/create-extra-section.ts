import { ExtraSectionDTO } from "../../../mappers/types";
import { CreateDraftExtraSectionProps } from "../../models/extra-section";
import extraSectionModel from "../../models/extra-section";
import { saveExtraSection } from "./save-extra-section";

export interface CreateExtraSectionProps extends CreateDraftExtraSectionProps {}

/**
 * Creates a new empty extra entry section as a draft
 */
const createNewExtraSection = async ({
  maxSelection,
  minSelection,
  title,
  titlePrefix,
  description,
  showFirstItemName
}: CreateExtraSectionProps): Promise<ExtraSectionDTO> => {
  if (maxSelection < minSelection) {
    throw new Error("max selection can't be greater than min selection");
  }

  // Create
  const extraSection = extraSectionModel.createDraft({
    description,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
    showFirstItemName,
  });

  return await saveExtraSection(extraSection);
};

export default createNewExtraSection;
