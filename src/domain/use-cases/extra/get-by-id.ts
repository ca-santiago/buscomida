import extraMapper from "../../../mappers/extra";
import { ExtraDTO } from "../../../mappers/types";
import extraService from "../../../services/extra";

const getExtraById = async (
  id: string
): Promise<ExtraDTO | null> => {
  const extra = await extraService.getExtraById(id);
  return extra ? extraMapper.DAOToDTO(extra) : null;
};

export default getExtraById;
