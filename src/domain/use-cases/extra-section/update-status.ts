import {
  ExtraEntrySection,
  ItemStatus,
  ItemStatusEnum,
} from "../../models/types";
import { buildStatusManager } from "../status-manager";
import { getExtraEntrySectionOrError } from "./get-extra-section-or-error";
import { saveExtraSection } from "./save-extra-section";

export interface UpdateExtraSectionStatusProps {
  id: string;
  status: ItemStatus;
}

export const updateExtraSectionStatus = async ({
  id,
  status,
}: UpdateExtraSectionStatusProps) => {
  if (!(status in ItemStatusEnum)) {
    // TODO: throw 400 standard error
    throw new Error("Invalid status value");
  }
  if (status === "DRAFT") {
    // TODO: throw 403 standard error
    throw new Error("Invalid operation");
  }
  const extraEntrySectionEntryStatusManager =
    buildStatusManager<ExtraEntrySection>();
  const extraEntrySectionEntry = await getExtraEntrySectionOrError(id);

  const updatedExtraEntrySectionEntry = extraEntrySectionEntryStatusManager(
    status,
    extraEntrySectionEntry
  );
  return await saveExtraSection(updatedExtraEntrySectionEntry);
};
