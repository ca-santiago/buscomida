import express from "express";
import { withRouteErrorBoundary } from "../helpers/with-error-boundary";
import { createExtraRoute } from "./create-extra";
import { getExtraByIdRoute } from "./get-extra-by-id";
import { getExtraListRoute } from "./get-extra-list";
import { updateExtraStatusRoute } from "./update-status";

export const extrasRouter: express.Express = express();

extrasRouter.post("/", withRouteErrorBoundary(createExtraRoute));

extrasRouter.get("/", withRouteErrorBoundary(getExtraListRoute));

extrasRouter.get("/:id", withRouteErrorBoundary(getExtraByIdRoute));

extrasRouter.put("/:id/status", withRouteErrorBoundary(updateExtraStatusRoute));
