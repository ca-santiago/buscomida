import express from "express";
import { createExtraEntryRoute } from "./create-extra-entry";
import { getExtraEntriesRoute } from "./get-extra-entries";
import { getExtraEntryByIdRoute } from "./get-extra-entry-by-id";

export const extraEntriesRouter = express();


extraEntriesRouter.post("/", createExtraEntryRoute);

extraEntriesRouter.get("/", getExtraEntriesRoute);

extraEntriesRouter.get("/:id", getExtraEntryByIdRoute);
