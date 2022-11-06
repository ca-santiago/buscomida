import { Extra, ItemStatus, ItemStatusEnum } from "../../models/types";
import { buildStatusManager } from "../status-manager";
import { getExtraOrError } from "./get-extra-or-error";
import { saveExtra } from "./save-extra";

export interface UpdateExtraStatusProps {
  id: string;
  status: ItemStatus;
}

export const updateExtraStatus = async ({
  id,
  status,
}: UpdateExtraStatusProps) => {
  if (!(status in ItemStatusEnum)) {
    // TODO: throw 400 standard error
    throw new Error("Invalid status value");
  }
  if (status === "DRAFT") {
    // TODO: throw 403 standard error
    throw new Error("Invalid operation");
  }
  const extraStatusManager = buildStatusManager<Extra>();
  const extra = await getExtraOrError(id);

  const updatedExtra = extraStatusManager(status, extra);
  return await saveExtra(updatedExtra);
};
