import extraEntrySectionMapper from "../../../mappers/extra-entry-section";
import { extraSectionService } from "../../../services";
import { NotFound } from "../../errors";
import { ExtraEntrySection } from "../../models/types";

export const getExtraEntrySectionOrError = async (
  id: string
): Promise<ExtraEntrySection> => {
  const extraEntrySection = await extraSectionService
    .getById(id)
    .then((e) => (e ? extraEntrySectionMapper.DAOtoDomain(e) : null));

  if (!extraEntrySection) {
    throw new NotFound();
  }

  return extraEntrySection;
};
