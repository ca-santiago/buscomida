export type SaveModel<Input> = (i: Input) => Promise<boolean>;
export type GetModelById<Output> = (id: string) => Promise<Output | null>;
export type GetModelCount<Output> = (
  offset: number,
  count: number
) => Promise<{
  pageCount: number;
  data: Output[];
}>;
export type ModelInstanceExist = (id: string) => boolean;

export type SelectionKeys<T> = (keyof T)[];
