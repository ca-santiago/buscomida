import express from "express";
import extraSectionUseCases from "../../domain/use-cases/extra-section";

export const createExtraSectionByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const extraSection = await extraSectionUseCases.getById(id);

    if (extraSection) {
      res.status(200).json({ extraSection });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    return res.status(500);
  }
};
