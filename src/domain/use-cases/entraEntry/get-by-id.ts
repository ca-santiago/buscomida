import extraEntryMapper from "../../../mappers/extra-entry";
import { ExtraEntryDTO } from "../../../mappers/types";
import extraEntryService from "../../../services/extra-entry";

const getExtraById = async (
  id: string
): Promise<ExtraEntryDTO | null> => {
  const extraEntry = await extraEntryService.getById(id);
  return extraEntry ? extraEntryMapper.DAOToDTO(extraEntry) : null;
};

export default getExtraById;
