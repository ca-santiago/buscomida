import { ItemStatus, ExtraEntry } from "../domain/models/types";
import { ExtraEntryDAO, ExtraEntryDTO } from "./types";

const domainToDAO = (eE: ExtraEntry): ExtraEntryDAO => {
  return { ...eE, _id: eE.id };
};

const DAOtoDomain = (eE: ExtraEntryDAO): ExtraEntry => {
  return { ...eE, id: eE._id, status: eE.status as ItemStatus };
};

const domainToDTO = (eE: ExtraEntry): ExtraEntryDTO => {
  return {
    ...eE,
    _id: eE.id,
    status: eE.status.toString(),
  };
};

const DAOToDTO = (eE: ExtraEntryDAO): ExtraEntryDTO => {
  return {
    ...eE,
  };
};

const extraEntryMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraEntryMapper;
