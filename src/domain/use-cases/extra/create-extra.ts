import { ExtraDTO } from "../../../mappers/types";
import extraModel from "../../models/extra";
import { saveExtra } from "./save-extra";

export interface CreateNewExtraProps {
  displayName: string;
  description: string;
  price: number;
}

/**
 * Creates a new empty extra as a draft
 */
const createNewExtra = async ({
  description,
  displayName,
  price,
}: CreateNewExtraProps): Promise<ExtraDTO> => {
  const extra = extraModel.createDraftEmptyExtra({
    description,
    displayName,
    addedPrice: price,
  });
  return await saveExtra(extra);
};

export default createNewExtra;
