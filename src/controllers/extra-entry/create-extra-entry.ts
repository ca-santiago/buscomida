import express from "express";
import Joi from "joi";
import extraEntryUseCases from "../../domain/use-cases/entra-entry";

const schema = Joi.object().keys({
  addedPrice: Joi.number().min(0).max(999999).required(),
  extraId: Joi.string().guid().required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

export const createExtraEntryRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { value, error } = schema.validate(req.body);
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
    return res.status(500).send(error["message"]).end();
  }
};
