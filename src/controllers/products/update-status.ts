import { Request, Response } from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";
import { UpdateProductStatusProps } from "../../domain/use-cases/product/update-status";
import { withRouteErrorBoundary } from "../helpers/with-error-boundary";

interface SchemaValues extends Omit<UpdateProductStatusProps, "pId"> {}

const schema = Joi.object<SchemaValues>().keys({
  status: Joi.string().valid("DISABLED", "ACTIVE").exist(),
});

export const updateProductStatusRoute = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  const product = await productUseCases.updateStatus({
    pId: id,
    status: value.status,
  });
  res.status(200).json({ product }).end();
};
