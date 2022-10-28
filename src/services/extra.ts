import { ExtraDAO } from "../mappers/types";
import { GetModelById, GetModelCount, SaveModel } from "./types";

const extras: ExtraDAO[] = [];

const save: SaveModel<ExtraDAO> = (e) => {
  const existingOne = extras.findIndex(({ _id }) => e._id === _id);
  if (existingOne > 0) {
    extras[existingOne] = e;
  } else {
    extras.push(e);
  }
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraDAO> = (eId) => {
  return new Promise((res) => {
    const exist = extras.find(({ _id }) => eId === _id);
    return res(exist || null);
  });
};

const getCount: GetModelCount<ExtraDAO> = (offset, count) => {
  const data = extras.slice(offset, offset + count);
  const pageCount = Math.ceil(extras.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

const extraService = {
  save,
  getCount,
  getById,
};

export default extraService;
