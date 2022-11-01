import mongoose from "mongoose";
import { ExtraEntrySectionDAO, ProductDAO } from "../../mappers/types";

const extraSectionSchema = new mongoose.Schema<ExtraEntrySectionDAO>({
  _id: { type: String },
  maxSelection: Number,
  minSelection: Number,
  title: String,
  titlePrefix: String,
  status: String,
  description: String,
  extras: [String],
  createdAt: String,
  releaseDate: String,
});

export const ExtraSectionMongoModel = mongoose.model("ExtraSection", extraSectionSchema);
