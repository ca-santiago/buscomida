import { ItemStatus, Extra } from "../domain/models/types";
import { ExtraDAO, ExtraDTO } from "./types";

const domainToDAO = (p: Extra): ExtraDAO => {
  return { ...p, _id: p.id };
};

const DAOtoDomain = (p: ExtraDAO): Extra => {
  return { ...p, id: p._id, status: p.status as ItemStatus };
};

const domainToDTO = (p: Extra): ExtraDTO => {
  return {
    ...p,
    _id: p.id,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ExtraDAO): ExtraDTO => {
  return {
    ...p,
  };
};

const extraMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraMapper;
