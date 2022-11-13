import express from "express";
import { getExtraSectionByIdRoute } from "./get-by-id";
import { createExtraSectionRoute } from "./create-extra-section";
import { getExtraSectionListRoute } from "./get-list";
import { updateExtraSectionStatusRoute } from "./update-status";
import { withRouteErrorBoundary } from "../helpers/with-error-boundary";

export const extraSectionsRouter = express();

extraSectionsRouter.get(
  "/:id",
  withRouteErrorBoundary(getExtraSectionByIdRoute)
);

extraSectionsRouter.post("/", withRouteErrorBoundary(createExtraSectionRoute));

extraSectionsRouter.get("/", withRouteErrorBoundary(getExtraSectionListRoute));

extraSectionsRouter.put(
  "/:id/status",
  withRouteErrorBoundary(updateExtraSectionStatusRoute)
);
