import express from "express";
import Joi from "joi";
import extraUseCases from "../domain/use-cases/extra";

export const extraRouter = express();

const extraPortRequest = Joi.object().keys({
  displayName: Joi.string().min(1).max(120).required(),
  description: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

extraRouter.post("/", async (req, res) => {
  const {
    value: { displayName, description, price },
    error,
  } = extraPortRequest.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const extra = await extraUseCases.createNewExtra({
      displayName,
      description,
      price,
    });
    res.status(200).json({ extra });
    return;
  } catch (err) {
    return res.status(500);
  }
});

const extraListQuery = Joi.object().keys({
  page: Joi.number(),
  count: Joi.number(),
});

extraRouter.get("/", async (req, res) => {
  let count;
  let page;
  if (req.query.page || req.query.count) {
    const { error, value } = extraListQuery.validate(req.query);
    if (error) {
      return res.status(400).json(error.message);
    }
    page = value.page;
    count = value.count;
  }

  const extras = await extraUseCases.getExtraList(page, count);
  res.status(200).json(extras);
});

extraRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const extra = await extraUseCases.getExtraById(id);

    if (extra) {
      res.status(200).json({ extra });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
});
