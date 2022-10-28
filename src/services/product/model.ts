import mongoose from "mongoose";
import { ProductDAO } from "../../mappers/types";

const productSchema = new mongoose.Schema<ProductDAO>({
  _id: { type: String },
  displayName: String,
  description: String,
  status: String,
  price: String,
  extrasSections: [String],
  extras: [String],
  extrasListOrder: [String],
  createdAt: String,
  releaseDate: String,
});

export const ProductMongoModel = mongoose.model("Product", productSchema);
