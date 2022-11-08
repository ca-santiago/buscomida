import express from "express";

type AppRoute = (req: express.Request, res: express.Response) => Promise<any>;

export const withRouteErrorBoundary =
  (callback: AppRoute) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    callback(req, res).catch((error) => next(error));
