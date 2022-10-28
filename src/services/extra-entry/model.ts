import mongoose from "mongoose";
import { ExtraEntryDAO } from "../../mappers/types";

const extraEntrySchema = new mongoose.Schema<ExtraEntryDAO>({
  _id: { type: String },
  extraId: String,
  status: String,
  createdAt: String,
  title: String,
  titlePrefix: String,
  maxSelection: Number,
  minSelection: Number,
  addedPrice: Number,
});

export const ExtraEntryMongoModel = mongoose.model("ExtraEntry", extraEntrySchema);
