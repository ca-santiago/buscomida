import { ExtraEntrySectionDAO } from "../../mappers/types";
import {
  GetModelById,
  GetModelCount,
  ModelInstanceExist,
  SaveModel,
  SelectionKeys,
} from "../types";
import { ExtraSectionMongoModel } from "./model";

const productDaoKeys: SelectionKeys<ExtraEntrySectionDAO> = [
  "_id",
  "title",
  "titlePrefix",
  "description",
  "extras",
  "maxSelection",
  "minSelection",
  "createdAt",
  "status",
  "releaseDate",
];
const extraSectionSelectionKeys = productDaoKeys.join(" ");

const save: SaveModel<ExtraEntrySectionDAO> = async (e) => {
  await ExtraSectionMongoModel.findByIdAndUpdate(
    e._id,
    { ...e },
    { upsert: true }
  )
    .select(extraSectionSelectionKeys)
    .exec();
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraEntrySectionDAO> = (_id) => {
  return new Promise((res, rej) => {
    ExtraSectionMongoModel.findOne({ _id })
      .lean()
      .select(extraSectionSelectionKeys)
      .exec((err, data) => {
        if (err) rej(err);
        res(data);
      });
  });
};

const getCount: GetModelCount<ExtraEntrySectionDAO> = async (offset, count) => {
  const amount = await ExtraSectionMongoModel.count();
  const data = await ExtraSectionMongoModel.find()
    .skip(offset)
    .limit(offset + count)
    .select(extraSectionSelectionKeys)
    .lean()
    .exec();
  return {
    data,
    pageCount: Math.ceil(amount / count),
  };
};

const exist: ModelInstanceExist = async (_id: string) => {
  const instance = await ExtraSectionMongoModel.exists({ _id }).exec();
  return !!instance;
};

export const extraSectionService = {
  save,
  getCount,
  getById,
  exist,
};
