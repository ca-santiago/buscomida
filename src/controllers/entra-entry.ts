import express from "express";
import Joi from "joi";
import extraEntryUseCases from "../domain/use-cases/entra-entry";
import { listJoiQuery } from "./helpers/list-validator";

export const extraEntriesRouter = express();

const extraEntryPortRequest = Joi.object().keys({
  addedPrice: Joi.number().min(0).max(999999).required(),
  extraId: Joi.string().guid().required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

extraEntriesRouter.post("/", async (req, res) => {
  const { value, error } = extraEntryPortRequest.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const {
    addedPrice,
    extraId,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
  } = value;

  try {
    const extraEntry = await extraEntryUseCases.createNewExtraEntry({
      title,
      titlePrefix,
      extraId,
      addedPrice,
      maxSelection,
      minSelection,
    });
    res.status(200).json({ extraEntry });
    return;
  } catch (error: any) {
    return res.status(500).send(error['message']).end();
  }
});

extraEntriesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await extraEntryUseCases.getById(id);

    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
});

extraEntriesRouter.get("/", async (req, res) => {
  let count;
  let page;
  if (req.query.page || req.query.count) {
    const { error, value } = listJoiQuery.validate(req.query);
    if (error) {
      return res.status(400).json(error.message);
    }
    page = value.page;
    count = value.count;
  }

  const extraEntrys = await extraEntryUseCases.getList(page, count);
  res.status(200).json(extraEntrys);
});
