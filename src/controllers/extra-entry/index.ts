import express from "express";
import { withRouteErrorBoundary } from "../helpers/with-error-boundary";
import { createExtraEntryRoute } from "./create-extra-entry";
import { getExtraEntriesRoute } from "./get-extra-entries";
import { getExtraEntryByIdRoute } from "./get-extra-entry-by-id";
import { updateExtraEntryStatusRoute } from "./update-status";

export const extraEntriesRouter = express();

extraEntriesRouter.post("/", withRouteErrorBoundary(createExtraEntryRoute));

extraEntriesRouter.get("/", withRouteErrorBoundary(getExtraEntriesRoute));

extraEntriesRouter.get("/:id", withRouteErrorBoundary(getExtraEntryByIdRoute));

extraEntriesRouter.put(
  "/:id/status",
  withRouteErrorBoundary(updateExtraEntryStatusRoute)
);
