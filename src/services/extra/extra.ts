import { ExtraDAO } from "../../mappers/types";
import {
  GetModelById,
  GetModelCount,
  SaveModel,
  SelectionKeys,
} from "../types";
import { ExtraMongoModel } from "./model";

const productDaoKeys: SelectionKeys<ExtraDAO> = [
  "_id",
  "createdAt",
  "description",
  "displayName",
  "status",
  "publishedAt",
  "addedPriceByUnit",
];
const productSelectionKeys = productDaoKeys.join(" ");

const save: SaveModel<ExtraDAO> = async (e) => {
  await ExtraMongoModel.findByIdAndUpdate(e._id, { ...e }, { upsert: true })
    .select(productSelectionKeys)
    .exec();
  return Promise.resolve(true);
};

const getById: GetModelById<ExtraDAO> = async (_id) => {
  return await ExtraMongoModel.findOne({ _id })
    .lean()
    .select(productSelectionKeys)
    .exec();
};

const getCount: GetModelCount<ExtraDAO> = async (offset, count) => {
  const amount = await ExtraMongoModel.count();
  const data = await ExtraMongoModel.find()
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

export const extraService = {
  save,
  getCount,
  getById,
};
