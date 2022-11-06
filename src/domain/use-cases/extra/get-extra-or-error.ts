import extraMapper from "../../../mappers/extra";
import { extraService } from "../../../services";
import { Extra } from "../../models/types";

export const getExtraOrError = async (id: string): Promise<Extra> => {
  const extra = await extraService
    .getById(id)
    .then((p) => (p ? extraMapper.DAOtoDomain(p) : null));

  if (!extra) {
    // TODO - Throw 404 error
    throw new Error("Extra does not exist");
  }

  return extra;
};
