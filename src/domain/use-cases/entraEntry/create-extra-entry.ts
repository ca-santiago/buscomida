import extraEntryMapper from "../../../mappers/extra-entry";
import { ExtraEntryDTO } from "../../../mappers/types";
import extraEntryService from "../../../services/extra-entry";
import extraEntryModel, {
  CreateDraftExtraEntryProps,
} from "../../models/entra-entry";

import { v4, validate } from "uuid";
import extraService from "../../../services/extra";

export interface CreateNewExtraEntryProps extends CreateDraftExtraEntryProps {}

/**
 * Creates a new empty extra-entry as a draft
 */
const createNewExtraEntry = async (
  props: CreateNewExtraEntryProps
): Promise<ExtraEntryDTO> => {
  const {
    addedPrice,
    extraId,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
  } = props;

  // Verification step
  const extra = await extraService.getExtraById(extraId);

  if (!extra) {
    throw new Error("Invalid extra");
  }

  if (maxSelection < minSelection) {
    throw new Error("max selection can't be greater than min selection");
  }

  // Create extra entry
  const extraEntry = extraEntryModel.createDraftEmptyExtraEntry({
    addedPrice,
    extraId,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
  });

  // Save it
  await extraEntryService.save(extraEntryMapper.domainToDAO(extraEntry));
  // Map it back
  return extraEntryMapper.domainToDTO(extraEntry);
};

export default createNewExtraEntry;
