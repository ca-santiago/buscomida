import extraEntrySectionMapper from "../../../mappers/extra-entry-section";
import { extraSectionService } from "../../../services";
import { ExtraEntrySection } from "../../models/types";

export const getExtraEntrySectionOrError = async (
  id: string
): Promise<ExtraEntrySection> => {
  const extraEntrySection = await extraSectionService
    .getById(id)
    .then((e) => (e ? extraEntrySectionMapper.DAOtoDomain(e) : null));

  if (!extraEntrySection) {
    // TODO - Throw 404 error
    throw new Error("ExtraEntrySection does not exist");
  }

  return extraEntrySection;
};
