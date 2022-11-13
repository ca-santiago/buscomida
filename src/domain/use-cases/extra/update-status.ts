import { Extra, ItemStatus } from "../../models/types";
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
  const extraStatusManager = buildStatusManager<Extra>();
  const extra = await getExtraOrError(id);

  const updatedExtra = extraStatusManager(status, extra);
  return await saveExtra(updatedExtra);
};
