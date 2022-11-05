import express from "express";
import Joi from "joi";
import productUseCases from "../../domain/use-cases/product";

const schema = Joi.object<schemaKeys>().keys({
  sections: Joi.array().items(Joi.string()).required(),
});

interface schemaKeys {
  sections: string[];
}

export const updateProductExtrasSectionsRoute = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  try {
    const product = await productUseCases.updateExtrasSections({
      sectionsIds: value.sections,
      pId: id,
    });
    res.status(200).json({ product });
    return;
  } catch (err: any) {
    return res.status(500).send(err.message).end();
  }
};
