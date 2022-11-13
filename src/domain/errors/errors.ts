export const isStandardError = (e: any): boolean => {
  return e instanceof StandardError;
};

export class StandardError extends Error {
  public status: number;
  constructor(msg: string, status: number) {
    super(msg);
    this.status = status;
  }
}

export class ForbiddenError extends StandardError {
  constructor(customReason?: string) {
    super(customReason || "This operation is not permited", 403);
  }
}

export class NotFound extends StandardError {
  constructor(resourceName?: string) {
    super(`${resourceName || "The resource"} was not found`, 404);
  }
}

export class BadResourceCreationArguments extends StandardError {
  constructor(customMessage?: string) {
    super(customMessage || "Invalid arguments", 400);
  }
}

export class BadResourceUpdateValues extends StandardError {
  constructor(customMessage?: string) {
    super(customMessage || "Invalid arguments", 400);
  }
}
