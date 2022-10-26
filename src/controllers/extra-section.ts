import express from "express";
import Joi from "joi";
import extraSectionUseCases from "../domain/use-cases/extra-section";
import { listJoiQuery } from "./helpers/list-validator";

export const extraSectionsRouter = express();

interface ExtraSectionRequestValues {
  description: string;
  maxSelection: number;
  minSelection: number;
  title: string;
  titlePrefix: string;
}
const extraSectionRequest = Joi.object<ExtraSectionRequestValues>().keys({
  description: Joi.string().min(0).max(240).required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
});

extraSectionsRouter.post("/", async (req, res) => {
  const { value, error } = extraSectionRequest.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const { description, maxSelection, minSelection, title, titlePrefix } = value;

  try {
    const data = await extraSectionUseCases.createNew({
      title,
      titlePrefix,
      maxSelection,
      minSelection,
      description,
    });
    res.status(200).json({ data });
    return;
  } catch (error: any) {
    // TODO: casantiago 24 Oct 2022 - Handle http return by verifying catched error type
    return res.status(500).send(error["message"]).end();
  }
});

extraSectionsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const extraSection = await extraSectionUseCases.getById(id);

    if (extraSection) {
      res.status(200).json({ extraSection });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
});

extraSectionsRouter.get("/", async (req, res) => {
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

  const extras = await extraSectionUseCases.getList(page, count);
  res.status(200).json(extras);
});
