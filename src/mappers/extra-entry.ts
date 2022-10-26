import { ItemStatus, ExtraEntry } from "../domain/models/types";
import { ExtraEntryDAO, ExtraEntryDTO } from "./types";

const domainToDAO = (eE: ExtraEntry): ExtraEntryDAO => {
  return {...eE};
};

const DAOtoDomain = (eE: ExtraEntryDAO): ExtraEntry => {
  return { ...eE, status: eE.status as ItemStatus };
};

const domainToDTO = (eE: ExtraEntry): ExtraEntryDTO => {
  return {
    ...eE,
    status: eE.status.toString(),
  };
};

const DAOToDTO = (eE: ExtraEntryDAO): ExtraEntryDTO => {
  return DAOtoDomain(eE);
};

const extraEntryMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraEntryMapper;