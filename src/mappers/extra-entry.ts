import { ItemStatus, ExtraEntry } from "../domain/models/types";
import { ExtraEntryDAO, ExtraEntryDTO } from "./types";

const domainToDAO = (p: ExtraEntry): ExtraEntryDAO => {
  return {...p};
};

const DAOtoDomain = (p: ExtraEntryDAO): ExtraEntry => {
  return { ...p, status: p.status as ItemStatus };
};

const domainToDTO = (p: ExtraEntry): ExtraEntryDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ExtraEntryDAO): ExtraEntryDTO => {
  return DAOtoDomain(p);
};

const extraMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraMapper;
