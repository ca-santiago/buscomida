import Joi from "joi";

interface PatchAction<T> {
  path: string;
  value: T;
}

interface PatchRequestBody {
  operations: Array<PatchAction<any>>;
}

const patchReqBody = Joi.object<PatchRequestBody>().keys({
  operations: Joi.array().min(1).exist(),
});

const pathAction = Joi.object<PatchAction<any>>()
  .keys({
    path: Joi.string().min(1).exist(),
    value: Joi.any().exist().not(Joi.string().empty()),
  })
  .required()
  .messages({
    "object.base": "Invalid patch action",
  });

export const validatePatchRequestBody = (
  request: Record<any, any>
): Joi.ValidationResult => {
  const body = patchReqBody.validate(request.body);
  if (body.error) {
    return body;
  }

  // Find invalid objects for patch actions
  const errorResult = body.value.operations
    .map((opt) => pathAction.validate(opt))
    .find((r) => r.error);

  return errorResult
    ? errorResult
    : {
        warning: undefined,
        error: undefined,
        value: body.value.operations,
      };
};

