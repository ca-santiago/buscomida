import express from "express";
import extraUseCases from "../../domain/use-cases/extra";

export const getExtraByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const extra = await extraUseCases.getExtraById(id);

    if (extra) {
      res.status(200).json({ extra });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
};
