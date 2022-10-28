import { ProductDAO } from "../../mappers/types";
import { ProductMongoModel } from "./model";
import { GetModelById, GetModelCount, SaveModel, SelectionKeys } from "../types";

const productDaoKeys: SelectionKeys<ProductDAO> = [
  "_id",
  "createdAt",
  "description",
  "displayName",
  "extras",
  "extrasSections",
  "extrasListOrder",
  "price",
  "releaseDate",
  "status",
];
const productSelectionKeys = productDaoKeys.join(" ");

const saveProduct: SaveModel<ProductDAO> = async (p: ProductDAO) => {
  await ProductMongoModel.findByIdAndUpdate(p._id, { ...p }, { upsert: true })
    .select(productSelectionKeys)
    .exec();
  return Promise.resolve(true);
};

const getById: GetModelById<ProductDAO> = (pId: string) => {
  return new Promise((res, rej) => {
    ProductMongoModel.findOne({ _id: pId })
      .lean()
      .select(productSelectionKeys)
      .exec((err, data) => {
        if (err) rej(err);
        res(data);
      });
  });
};

const getCount: GetModelCount<ProductDAO> = async (offset, count) => {
  const amount = await ProductMongoModel.count();
  const data = await ProductMongoModel.find()
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

export const productService = {
  save: saveProduct,
  getById,
  getCount,
};
