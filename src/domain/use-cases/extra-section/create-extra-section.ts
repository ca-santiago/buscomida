import { ExtraEntrySectionDTO } from "../../../mappers/types";
import { CreateDraftExtraSectionProps } from "../../models/extra-section";
import extraSectionService from "../../../services/extra-entry-section";
import extraSectionModel from "../../models/extra-section";
import extraSectionMapper from "../../../mappers/extra-entry-section";

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
}: CreateExtraSectionProps): Promise<ExtraEntrySectionDTO> => {
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
  });

  // Save it
  await extraSectionService.save(extraSectionMapper.domainToDAO(extraSection));

  // Map it back
  return extraSectionMapper.domainToDTO(extraSection);
};

export default createNewExtraSection;
