import { ItemStatus, ItemStatusEnum, ExtraEntry } from "../../models/types";
import { buildStatusManager } from "../status-manager";
import { getExtraEntryOrError } from "./get-extra-or-error";
import { saveExtraEntry } from "./save-extra-entry";

export interface UpdateExtraEntryStatusProps {
  id: string;
  status: ItemStatus;
}

export const updateExtraEntryStatus = async ({
  id,
  status,
}: UpdateExtraEntryStatusProps) => {
  if (!(status in ItemStatusEnum)) {
    // TODO: throw 400 standard error
    throw new Error("Invalid status value");
  }
  if (status === "DRAFT") {
    // TODO: throw 403 standard error
    throw new Error("Invalid operation");
  }
  const extraEntryStatusManager = buildStatusManager<ExtraEntry>();
  const extraEntry = await getExtraEntryOrError(id);

  const updatedExtraEntry = extraEntryStatusManager(status, extraEntry);
  return await saveExtraEntry(updatedExtraEntry);
};
