import createNewExtraSection from "./create-extra-section";
import getExtraSectionById from "./get-by-id";
import getExtraSectionList from "./get-list";
import { updateExtraSectionStatus } from "./update-status";

const extraSectionUseCases = {
  createNew: createNewExtraSection,
  getById: getExtraSectionById,
  getList: getExtraSectionList,
  updateStatus: updateExtraSectionStatus
};

export default extraSectionUseCases;
