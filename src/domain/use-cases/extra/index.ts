import createNewExtra from "./create-extra";
import getExtraById from "./get-by-id";
import getExtraList from "./get-extra-list";
import { updateExtraStatus } from "./update-status";

const extraUseCases = {
  createNewExtra,
  getExtraById,
  getExtraList,
  updateStatus: updateExtraStatus,
};

export default extraUseCases;
