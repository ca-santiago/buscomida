import extraSectionMapper from "../../../mappers/extra-entry-section";
import { ExtraEntrySectionDTO } from "../../../mappers/types";
import extraSectionService from "../../../services/extra-entry-section";

const getExtraSectionById = async (
  id: string
): Promise<ExtraEntrySectionDTO | null> => {
  const extra = await extraSectionService.getById(id);
  return extra ? extraSectionMapper.DAOToDTO(extra) : null;
};

export default getExtraSectionById;