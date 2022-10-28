import { ExtraEntrySectionDAO } from "../mappers/types";
import {
  GetModelById,
  GetModelCount,
  ModelInstanceExist,
  SaveModel,
} from "./types";

const extraSectionSections: ExtraEntrySectionDAO[] = [];

const save: SaveModel<ExtraEntrySectionDAO> = (e) => {
  const existingOne = extraSectionSections.findIndex(({ _id }) => e._id === _id);
  if (existingOne > 0) {
    extraSectionSections[existingOne] = e;
  } else {
    extraSectionSections.push(e);
  }
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraEntrySectionDAO> = (eId) => {
  return new Promise((res) => {
    const exist = extraSectionSections.find(({ _id }) => eId === _id);
    return res(exist || null);
  });
};

const getCount: GetModelCount<ExtraEntrySectionDAO> = (offset, count) => {
  const data = extraSectionSections.slice(offset, offset + count);
  const pageCount = Math.ceil(extraSectionSections.length / count);
  return Promise.resolve({
    data,
    pageCount,
  });
};

const exist: ModelInstanceExist = (eId: string) => {
  const existing = extraSectionSections.find((eE) => eE._id === eId);
  return existing !== undefined;
};

const extraSectionService = {
  save,
  getCount,
  getById,
  exist,
};

export default extraSectionService;
