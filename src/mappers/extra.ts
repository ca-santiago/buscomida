
import { ItemStatus, Extra } from "../domain/models/types";
import { ExtraDAO, ExtraDTO } from "./types";

const domainToDAO = (p: Extra): ExtraDAO => {
  return { ...p };
};

const DAOtoDomain = (p: ExtraDAO): Extra => {
  return { ...p, status: p.status as ItemStatus };
};

const domainToDTO = (p: Extra): ExtraDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ExtraDAO): ExtraDTO => {
  return DAOtoDomain(p);
};

const extraMapper = {
    domainToDAO,
    DAOtoDomain,
    domainToDTO,
    DAOToDTO,
  };
  
  export default extraMapper;
  