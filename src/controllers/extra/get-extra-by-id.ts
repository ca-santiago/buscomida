import express from "express";
import extraUseCases from "../../domain/use-cases/extra";

export const getExtraByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const data = await extraUseCases.getExtraById(id);
  data ? res.status(200).json({ data }) : res.status(404).end();
};
