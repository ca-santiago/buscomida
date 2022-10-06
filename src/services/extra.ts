import { ExtraDAO } from "../mappers/types";

const extras: ExtraDAO[] = [];

export type SaveExtra = (e: ExtraDAO) => Promise<boolean>;

const save: SaveExtra = (e) => {
  const existingOne = extras.findIndex(({ id }) => e.id === id);
  if (existingOne > 0) {
    extras[existingOne] = e;
  } else {
    extras.push(e);
  }
  return Promise.resolve(true);
};

export type GetExtraById = (eId: string) => Promise<ExtraDAO | null>;

const getExtraById: GetExtraById = (eId) => {
  return new Promise((res) => {
    const exist = extras.find(({ id }) => eId === id);
    return res(exist || null);
  });
};

export type GetExtrasCount = (
  offset: number,
  count: number
) => Promise<{
  pageCount: number;
  data: ExtraDAO[];
}>;

const getExtrasCount: GetExtrasCount = (offset, count) => {
  const data = extras.slice(offset, offset + count);
  const pageCount = Math.ceil(extras.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

const extraService = {
  save,
  getExtrasCount,
  getExtraById,
};

export default extraService;
