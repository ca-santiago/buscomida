import extraEntryMapper from "../../../mappers/extra-entry";
import { ExtraEntryDTO } from "../../../mappers/types";
import { extraEntryService } from "../../../services";
import { ExtraEntry } from "../../models/types";

export const saveExtraEntry = async (e: ExtraEntry): Promise<ExtraEntryDTO> => {
  await extraEntryService.save(extraEntryMapper.domainToDAO(e));
  return extraEntryMapper.domainToDTO(e);
};
