import extraMapper from "../../../mappers/extra";
import { ExtraDTO } from "../../../mappers/types";
import { extraService } from "../../../services";
import { Extra } from "../../models/types";

export const saveExtra = async (e: Extra): Promise<ExtraDTO> => {
  await extraService.save(extraMapper.domainToDAO(e));
  return extraMapper.domainToDTO(e);
};
