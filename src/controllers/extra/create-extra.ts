import express from "express";
import Joi from "joi";
import extraUseCases from "../../domain/use-cases/extra";
import { CreateNewExtraProps } from "../../domain/use-cases/extra/create-extra";

const schema = Joi.object<CreateNewExtraProps>().keys({
  displayName: Joi.string().min(1).max(120).required(),
  description: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

export const createExtraRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { value, error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { displayName, description, price } = value;
  const extra = await extraUseCases.createNewExtra({
    displayName,
    description,
    price,
  });
  res.status(200).json({ extra });
};
