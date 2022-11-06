import express from "express";
import Joi from "joi";
import extraUseCases from "../../domain/use-cases/extra";
import { UpdateExtraStatusProps } from "../../domain/use-cases/extra/update-status";

interface SchemaValues extends Omit<UpdateExtraStatusProps, "pId"> {}

const schema = Joi.object<SchemaValues>().keys({
  status: Joi.string().valid("DISABLED", "ACTIVE").exist(),
});

export const updateExtraStatusRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const extra = await extraUseCases.updateStatus({
      pId: id,
      status: value.status,
    });
    res.status(200).json({ extra });
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
