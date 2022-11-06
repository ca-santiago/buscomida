import { Extra, ItemStatus, ItemStatusEnum } from "../../models/types";
import { buildStatusManager } from "../status-manager";
import { getExtraOrError } from "./get-extra-or-error";
import { saveExtra } from "./save-extra";

export interface UpdateExtraStatusProps {
  pId: string;
  status: ItemStatus;
}

export const updateExtraStatus = async ({
  pId,
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
  const extra = await getExtraOrError(pId);

  const updatedExtra = extraStatusManager(status, extra);
  return await saveExtra(updatedExtra);
};
