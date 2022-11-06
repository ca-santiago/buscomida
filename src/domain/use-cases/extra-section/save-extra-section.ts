import extraSectionMapper from "../../../mappers/extra-entry-section";
import { ExtraEntrySectionDTO } from "../../../mappers/types";
import { extraSectionService } from "../../../services";
import { ExtraEntrySection } from "../../models/types";

export const saveExtraSection = async (
  e: ExtraEntrySection
): Promise<ExtraEntrySectionDTO> => {
  await extraSectionService.save(extraSectionMapper.domainToDAO(e));
  return extraSectionMapper.domainToDTO(e);
};
