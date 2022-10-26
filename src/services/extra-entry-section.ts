import { ExtraEntrySectionDAO } from "../mappers/types";

const extraSectionSections: ExtraEntrySectionDAO[] = [];

export type SaveExtraSection = (e: ExtraEntrySectionDAO) => Promise<boolean>;
const save: SaveExtraSection = (e) => {
  const existingOne = extraSectionSections.findIndex(({ id }) => e.id === id);
  if (existingOne > 0) {
    extraSectionSections[existingOne] = e;
  } else {
    extraSectionSections.push(e);
  }
  return Promise.resolve(true);
};

export type GetExtraSectionById = (eId: string) => Promise<ExtraEntrySectionDAO | null>;
const getById: GetExtraSectionById = (eId) => {
  return new Promise((res) => {
    const exist = extraSectionSections.find(({ id }) => eId === id);
    return res(exist || null);
  });
};

export type GetExtraSectionsCount = (
  offset: number,
  count: number
) => Promise<{
  pageCount: number;
  data: ExtraEntrySectionDAO[];
}>;
const getCount: GetExtraSectionsCount = (offset, count) => {
  const data = extraSectionSections.slice(offset, offset + count);
  const pageCount = Math.ceil(extraSectionSections.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

export type ExtraSectionExist = (eId: string) => boolean;
const exist: ExtraSectionExist = (eId: string) => {
  const existing = extraSectionSections.find((eE) => eE.id === eId);
  return existing !== undefined;
};

const extraSectionService = {
  save,
  getCount,
  getById,
  exist,
};

export default extraSectionService;
