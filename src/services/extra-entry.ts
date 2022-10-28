import { ExtraEntryDAO } from "../mappers/types";
import {
  GetModelById,
  GetModelCount,
  ModelInstanceExist,
  SaveModel,
} from "./types";

const extraEntries: ExtraEntryDAO[] = [];

const save: SaveModel<ExtraEntryDAO> = (e) => {
  const existingOne = extraEntries.findIndex(({ _id }) => e._id === _id);
  if (existingOne > 0) {
    extraEntries[existingOne] = e;
  } else {
    extraEntries.push(e);
  }
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraEntryDAO> = (eId) => {
  return new Promise((res) => {
    const exist = extraEntries.find(({ _id }) => eId === _id);
    return res(exist || null);
  });
};

const getCount: GetModelCount<ExtraEntryDAO> = (offset, count) => {
  const data = extraEntries.slice(offset, offset + count);
  const pageCount = Math.ceil(extraEntries.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

const exist: ModelInstanceExist = (eId: string) => {
  const existing = extraEntries.find((eE) => eE._id === eId);
  return existing !== undefined;
};

const extraEntryService = {
  save,
  getCount,
  getById,
  exist,
};

export default extraEntryService;
