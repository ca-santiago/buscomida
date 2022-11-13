import express from "express";
import extraSectionUseCases from "../../domain/use-cases/extra-section";

export const getExtraSectionByIdRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const extraSection = await extraSectionUseCases.getById(id);
  extraSection ? res.status(200).json({ extraSection }) : res.status(404).end();
};
