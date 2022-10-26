import { ExtraEntryDAO } from "../mappers/types";

const extraEntries: ExtraEntryDAO[] = [];

export type SaveExtraEntry = (e: ExtraEntryDAO) => Promise<boolean>;
const save: SaveExtraEntry = (e) => {
  const existingOne = extraEntries.findIndex(({ id }) => e.id === id);
  if (existingOne > 0) {
    extraEntries[existingOne] = e;
  } else {
    extraEntries.push(e);
  }
  return Promise.resolve(true);
};

export type GetExtraEntryById = (eId: string) => Promise<ExtraEntryDAO | null>;
const getById: GetExtraEntryById = (eId) => {
  return new Promise((res) => {
    const exist = extraEntries.find(({ id }) => eId === id);
    return res(exist || null);
  });
};

export type GetExtraEntriesCount = (
  offset: number,
  count: number
) => Promise<{
  pageCount: number;
  data: ExtraEntryDAO[];
}>;
const getCount: GetExtraEntriesCount = (offset, count) => {
  const data = extraEntries.slice(offset, offset + count);
  const pageCount = Math.ceil(extraEntries.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

export type ExtraEntryExist = (eId: string) => boolean;
const exist: ExtraEntryExist = (eId: string) => {
  const existing = extraEntries.find((eE) => eE.id === eId);
  return existing !== undefined;
};

const extraEntryService = {
  save,
  getCount,
  getById,
  exist,
};

export default extraEntryService;
