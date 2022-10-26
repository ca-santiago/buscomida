import createNewExtraSection from "./create-extra-section";
import getExtraSectionById from "./get-by-id";
import getExtraSectionList from "./get-list";

const extraSectionUseCases = {
  createNew: createNewExtraSection,
  getById: getExtraSectionById,
  getList: getExtraSectionList,
};

export default extraSectionUseCases;
