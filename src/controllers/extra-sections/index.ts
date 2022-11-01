import express from "express";
import { createExtraSectionByIdRoute } from "./get-by-id";
import { createExtraSectionRoute } from "./create-extra-section";
import { getExtraSectionListRoute } from "./get-list";

export const extraSectionsRouter = express();

extraSectionsRouter.get("/:id", createExtraSectionByIdRoute);

extraSectionsRouter.post("/", createExtraSectionRoute);

extraSectionsRouter.get("/", getExtraSectionListRoute);
