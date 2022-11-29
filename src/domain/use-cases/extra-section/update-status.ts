import { ExtraSection, ItemStatus } from "../../models/types";
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
  const updateStatusTo = buildStatusManager<ExtraSection>();
  const extraEntrySectionEntry = await getExtraEntrySectionOrError(id);

  const updatedExtraEntrySectionEntry = updateStatusTo(
    status,
    extraEntrySectionEntry
  );
  return await saveExtraSection(updatedExtraEntrySectionEntry);
};
