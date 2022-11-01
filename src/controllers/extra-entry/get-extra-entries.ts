import express from "express";
import extraEntryUseCases from "../../domain/use-cases/entra-entry";
import { listJoiQuery } from "../helpers/list-validator";

export const getExtraEntriesRoute = async (
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

  const extraEntrys = await extraEntryUseCases.getList(page, count);
  res.status(200).json(extraEntrys);
};
