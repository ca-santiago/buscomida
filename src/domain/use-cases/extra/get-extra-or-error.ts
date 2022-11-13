import extraMapper from "../../../mappers/extra";
import { extraService } from "../../../services";
import { NotFound } from "../../errors";
import { Extra } from "../../models/types";

export const getExtraOrError = async (id: string): Promise<Extra> => {
  const extra = await extraService
    .getById(id)
    .then((e) => (e ? extraMapper.DAOtoDomain(e) : null));

  if (!extra) {
    throw new NotFound();
  }

  return extra;
};
