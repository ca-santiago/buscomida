import express from "express";
import extraEntryUseCases from "../../domain/use-cases/entra-entry";

export const getExtraEntryByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const data = await extraEntryUseCases.getById(id);

    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
};
