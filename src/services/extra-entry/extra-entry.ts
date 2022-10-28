import { ExtraEntryDAO } from "../../mappers/types";
import {
  GetModelById,
  GetModelCount,
  ModelInstanceExist,
  SaveModel,
  SelectionKeys,
} from "../types";
import { ExtraEntryMongoModel } from "./model";

const productDaoKeys: SelectionKeys<ExtraEntryDAO> = [
  "_id",
  "extraId",
  "status",
  "createdAt",
  "title",
  "titlePrefix",
  "maxSelection",
  "minSelection",
  "addedPrice",
];
const productSelectionKeys = productDaoKeys.join(" ");

const save: SaveModel<ExtraEntryDAO> = async (e) => {
  await ExtraEntryMongoModel.findByIdAndUpdate(
    e._id,
    { ...e },
    { upsert: true }
  )
    .select(productSelectionKeys)
    .exec();
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraEntryDAO> = (_id) => {
  return new Promise((res, rej) => {
    ExtraEntryMongoModel.findOne({ _id })
      .lean()
      .select(productSelectionKeys)
      .exec((err, data) => {
        if (err) rej(err);
        res(data);
      });
  });
};

const getCount: GetModelCount<ExtraEntryDAO> = async (offset, count) => {
  const amount = await ExtraEntryMongoModel.count();
  const data = await ExtraEntryMongoModel.find()
    .skip(offset)
    .limit(offset + count)
    .select(productSelectionKeys)
    .lean()
    .exec();
  return {
    data,
    pageCount: Math.ceil(amount / count),
  };
};

const exist: ModelInstanceExist = async (_id: string) => {
  const instance = await ExtraEntryMongoModel.exists({ _id }).exec();
  return !!instance;
};

export const extraEntryService = {
  save,
  getCount,
  getById,
  exist,
};
