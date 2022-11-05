import { ItemStatus } from "../../models/types";

interface DraftObject {
  status: ItemStatus;
}

export const existAndIsNotDraft = (e: DraftObject | null): Boolean => {
  if (!e) return false;
  // TODO: replace when it is possible to publish extras
  // return e.status !== "DRAFT";
  return true;
};
