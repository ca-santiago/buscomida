import extraMapper from "../../../mappers/extra";
import { ExtraDTO } from "../../../mappers/types";
import { extraService } from "../../../services";
import { GetModelById } from "../../../services/types";

const getExtraById: GetModelById<ExtraDTO> = async (id: string) => {
  const extra = await extraService.getById(id);
  return extra ? extraMapper.DAOToDTO(extra) : null;
};

export default getExtraById;
