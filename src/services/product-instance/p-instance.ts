import { ProductInstanceDAO } from "../../mappers/types";
import { ProductInstanceMongoModel } from "./model";
import {
  GetModelById,
  GetModelCount,
  SaveModel,
  SelectionKeys,
} from "../types";

const daoKeys: SelectionKeys<ProductInstanceDAO> = [
  "_id",
  "productId",
  "checkoutDate",
  "sectionsDetails",
];
const selectionKeys = daoKeys.join(" ");

const save: SaveModel<ProductInstanceDAO> = async (
  p: ProductInstanceDAO
) => {
  await ProductInstanceMongoModel.findByIdAndUpdate(
    p._id,
    { ...p },
    { upsert: true }
  )
    .select(selectionKeys)
    .exec();
  return Promise.resolve(true);
};

const getById: GetModelById<ProductInstanceDAO> = (pId: string) => {
  return new Promise((res, rej) => {
    ProductInstanceMongoModel.findOne({ _id: pId })
      .lean()
      .select(selectionKeys)
      .exec((err, data) => {
        if (err) rej(err);
        res(data);
      });
  });
};

const getCount: GetModelCount<ProductInstanceDAO> = async (offset, count) => {
  const amount = await ProductInstanceMongoModel.count();
  const data = await ProductInstanceMongoModel.find()
    .skip(offset)
    .limit(offset + count)
    .select(selectionKeys)
    .lean()
    .exec();
  return {
    data,
    pageCount: Math.ceil(amount / count),
  };
};

export const productInstanceService = {
  save: save,
  getById,
  getCount,
};
