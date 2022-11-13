import { ItemStatus, ExtraEntry } from "../../models/types";
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
  const updateItemStatus = buildStatusManager<ExtraEntry>();
  const extraEntry = await getExtraEntryOrError(id);

  const updatedExtraEntry = updateItemStatus(status, extraEntry);
  return await saveExtraEntry(updatedExtraEntry);
};
