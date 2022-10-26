import createNewExtraEntry from "./create-extra-entry";
import getExtraEntryById from "./get-by-id";
import getExtraEntryList from "./get-list";

const extraEntryUseCases = {
  createNewExtraEntry,
  getById: getExtraEntryById,
  getList: getExtraEntryList,
};

export default extraEntryUseCases;
