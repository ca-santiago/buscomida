import express from "express";
import extraUseCases from "../../domain/use-cases/extra";
import { listJoiQuery } from "../helpers/list-validator";

export const getExtraListRoute = async (
  req: express.Request,
  res: express.Response
) => {
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

  const extras = await extraUseCases.getExtraList(page, count);
  res.status(200).json(extras);
};
