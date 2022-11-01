import express from "express";
import Joi from "joi";
import extraSectionUseCases from "../../domain/use-cases/extra-section";

interface ExtraSectionRequestValues {
  description: string;
  maxSelection: number;
  minSelection: number;
  title: string;
  titlePrefix: string;
}

const schema = Joi.object<ExtraSectionRequestValues>().keys({
  description: Joi.string().min(0).max(240).required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
});

export const createExtraSectionRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { value, error } = schema.validate(req.body);
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
};
