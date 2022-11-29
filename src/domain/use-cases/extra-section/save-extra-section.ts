import extraSectionMapper from "../../../mappers/extra-section";
import { ExtraSectionDTO } from "../../../mappers/types";
import { extraSectionService } from "../../../services";
import { ExtraSection } from "../../models/types";

export const saveExtraSection = async (
  e: ExtraSection
): Promise<ExtraSectionDTO> => {
  await extraSectionService.save(extraSectionMapper.domainToDAO(e));
  return extraSectionMapper.domainToDTO(e);
};
