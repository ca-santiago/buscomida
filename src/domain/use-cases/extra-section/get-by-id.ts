import extraSectionMapper from "../../../mappers/extra-section";
import { ExtraSectionDTO } from "../../../mappers/types";
import { extraSectionService } from "../../../services";

const getExtraSectionById = async (
  id: string
): Promise<ExtraSectionDTO | null> => {
  const extra = await extraSectionService.getById(id);
  return extra ? extraSectionMapper.DAOToDTO(extra) : null;
};

export default getExtraSectionById;
