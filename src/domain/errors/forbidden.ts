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
  constructor() {
    super("This operation is not permited", 403);
  }
}
