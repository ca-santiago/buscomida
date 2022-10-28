import extraMapper from "../../../mappers/extra";
import { ExtraDTO } from "../../../mappers/types";
import { extraService } from "../../../services";
import extraModel from "../../models/extra";

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
  await extraService.save(extraMapper.domainToDAO(extra));

  return extraMapper.domainToDTO(extra);
};

export default createNewExtra;
