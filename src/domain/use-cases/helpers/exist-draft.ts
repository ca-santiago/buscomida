import { ItemStatus } from "../../models/types";

interface DraftObject {
  status: ItemStatus;
}

export const existAndIsNotDraft = (e: DraftObject | null): Boolean => {
  if (!e) return false;
  return e.status !== "DRAFT";
};

export const existAndIsActive = (e: DraftObject | null): Boolean => {
  if (!e) return false;
  return hasActiveStatus(e);
};

export const hasActiveStatus = (e: DraftObject): Boolean => {
  return e.status === "ACTIVE";
};
