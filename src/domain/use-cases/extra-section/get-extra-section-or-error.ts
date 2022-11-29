import extraEntrySectionMapper from "../../../mappers/extra-section";
import { extraSectionService } from "../../../services";
import { NotFound } from "../../errors";
import { ExtraSection } from "../../models/types";

export const getExtraEntrySectionOrError = async (
  id: string
): Promise<ExtraSection> => {
  const extraEntrySection = await extraSectionService
    .getById(id)
    .then((e) => (e ? extraEntrySectionMapper.DAOtoDomain(e) : null));

  if (!extraEntrySection) {
    throw new NotFound();
  }

  return extraEntrySection;
};
