import createNewExtraEntry from "./create-extra-entry";
import getExtraEntryById from "./get-by-id";
import getExtraEntryList from "./get-list";
import { updateExtraEntryStatus } from "./update-status";

const extraEntryUseCases = {
  createNewExtraEntry,
  getById: getExtraEntryById,
  getList: getExtraEntryList,
  updateStatus: updateExtraEntryStatus,
};

export default extraEntryUseCases;
