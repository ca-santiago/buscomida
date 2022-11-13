import express from "express";
import { withRouteErrorBoundary } from "../helpers/with-error-boundary";
import { createProductRoute } from "./create-product";
import { getProductByIdRoute } from "./get-product-by-id";
import { getProductsRoute } from "./get-products";
import { updateProductExtraRoute } from "./udpate-extras";
import { updateProductContentRoute } from "./update-content";
import { updateProductStatusRoute } from "./update-status";

export const productsRouter = express();

productsRouter.put(
  "/:id/extras",
  withRouteErrorBoundary(updateProductExtraRoute)
);

productsRouter.put(
  "/:id/content",
  withRouteErrorBoundary(updateProductContentRoute)
);

productsRouter.put(
  "/:id/status",
  withRouteErrorBoundary(updateProductStatusRoute)
);

productsRouter.get("/:id", withRouteErrorBoundary(getProductByIdRoute));

productsRouter.post("/", withRouteErrorBoundary(createProductRoute));

productsRouter.get("/", withRouteErrorBoundary(getProductsRoute));
