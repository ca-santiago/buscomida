import Joi from "joi";

export const listJoiQuery = Joi.object().keys({
  page: Joi.number(),
  count: Joi.number(),
});
