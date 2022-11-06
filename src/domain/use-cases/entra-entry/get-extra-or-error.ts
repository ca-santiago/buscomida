import extraEntryMapper from "../../../mappers/extra-entry";
import { extraEntryService } from "../../../services";
import { ExtraEntry } from "../../models/types";

export const getExtraEntryOrError = async (id: string): Promise<ExtraEntry> => {
  const extraEntry = await extraEntryService
    .getById(id)
    .then((e) => (e ? extraEntryMapper.DAOtoDomain(e) : null));

  if (!extraEntry) {
    // TODO - Throw 404 error
    throw new Error("Extra entry does not exist");
  }

  return extraEntry;
};
