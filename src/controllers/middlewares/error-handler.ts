import express from "express";
import { StandardError } from "../../domain/errors";

export const errorHandlerMiddleware = (
  err: express.Errback,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err instanceof StandardError) {
    return res.status(err.status).json(err.message).end();
  } else {
    return res.status(500).end();
  }
};
