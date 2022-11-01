import express from "express";
import extraSectionUseCases from "../../domain/use-cases/extra-section";
import { listJoiQuery } from "../helpers/list-validator";

export const getExtraSectionListRoute = async (
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

  const extras = await extraSectionUseCases.getList(page, count);
  res.status(200).json(extras);
};
