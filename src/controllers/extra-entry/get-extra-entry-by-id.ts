import express from "express";
import extraEntryUseCases from "../../domain/use-cases/entra-entry";

export const getExtraEntryByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const data = await extraEntryUseCases.getById(id);
  data ? res.status(200).json({ data }) : res.status(404).end();
};
