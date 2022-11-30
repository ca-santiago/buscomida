import mongoose from "mongoose";
import {
  ProductInstanceDAO,
  ExtraSectionDetailsDAO,
  ExtraDetailsDAO,
} from "../../mappers/types";

const extraDetailsSchema = new mongoose.Schema<ExtraDetailsDAO>({
  count: Number,
  extraId: String,
});

const extraSectionDetailsSchema = new mongoose.Schema<ExtraSectionDetailsDAO>({
  sectionId: String,
  extras: [extraDetailsSchema],
});

const productInstanceSchema = new mongoose.Schema<ProductInstanceDAO>({
  _id: { type: String },
  productId: String,
  checkoutDate: String,
  sectionsDetails: [extraSectionDetailsSchema],
});

export const ProductInstanceMongoModel = mongoose.model("ProductInstance", productInstanceSchema);
