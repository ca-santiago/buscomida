import express from "express";
import Joi from "joi";
import extraSectionUseCases from "../../domain/use-cases/extra-section";
import { CreateExtraSectionProps } from "../../domain/use-cases/extra-section/create-extra-section";

const schema = Joi.object<CreateExtraSectionProps>().keys({
  description: Joi.string().min(0).max(240).required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
  showFirstItemName: Joi.boolean().required(),
});

export const createExtraSectionRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { value, error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const {
    description,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
    showFirstItemName,
  } = value;

  const data = await extraSectionUseCases.createNew({
    title,
    titlePrefix,
    maxSelection,
    minSelection,
    description,
    showFirstItemName,
  });
  res.status(200).json({ data });
};
