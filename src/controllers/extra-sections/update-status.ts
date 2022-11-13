import express from "express";
import Joi from "joi";
import extraSectionUseCases from "../../domain/use-cases/extra-section";
import { UpdateExtraSectionStatusProps } from "../../domain/use-cases/extra-section/update-status";

interface SchemaValues extends Omit<UpdateExtraSectionStatusProps, "id"> {}

const schema = Joi.object<SchemaValues>().keys({
  status: Joi.string().valid("DISABLED", "ACTIVE").exist(),
});

export const updateExtraSectionStatusRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  const extraEntry = await extraSectionUseCases.updateStatus({
    id,
    status: value.status,
  });
  res.status(200).json({ extraEntry });
};
