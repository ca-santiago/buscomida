import express from "express";
import Joi from "joi";
import extraEntryUseCases from "../../domain/use-cases/entra-entry";
import { UpdateExtraEntryStatusProps } from "../../domain/use-cases/entra-entry/update-status";

interface SchemaValues extends Omit<UpdateExtraEntryStatusProps, "pId"> {}

const schema = Joi.object<SchemaValues>().keys({
  status: Joi.string().valid("DISABLED", "ACTIVE").exist(),
});

export const updateExtraEntryStatusRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const extraEntry = await extraEntryUseCases.updateStatus({
      id,
      status: value.status,
    });
    res.status(200).json({ extraEntry });
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
