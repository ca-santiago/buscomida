import extraEntryMapper from "../../../mappers/extra-entry";
import { extraEntryService } from "../../../services";
import { NotFound } from "../../errors";
import { ExtraEntry } from "../../models/types";

export const getExtraEntryOrError = async (id: string): Promise<ExtraEntry> => {
  const extraEntry = await extraEntryService
    .getById(id)
    .then((e) => (e ? extraEntryMapper.DAOtoDomain(e) : null));

  if (!extraEntry) {
    throw new NotFound();
  }

  return extraEntry;
};
