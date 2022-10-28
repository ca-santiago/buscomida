import mongoose from "mongoose";
import { ExtraDAO } from "../../mappers/types";

const extraSchema = new mongoose.Schema<ExtraDAO>({
  _id: { type: String },
  displayName: String,
  description: String,
  status: String,
  createdAt: String,
  addedPriceByUnit: Number,
  publishedAt: String,
});

export const ExtraMongoModel = mongoose.model("Extra", extraSchema);
