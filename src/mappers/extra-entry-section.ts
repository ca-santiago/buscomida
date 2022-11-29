import {
  ItemStatus,
  ExtraSection,
  ExtraSectionItem,
} from "../domain/models/types";
import {
  ExtraEntryOnSectionDAO,
  ExtraSectionDAO,
  ExtraSectionDTO,
} from "./types";

const mapExtraEntryOnSectionDAOtoDomain = (
  e: ExtraEntryOnSectionDAO
): ExtraSectionItem => {
  return {
    ...e,
    status: e.status as ItemStatus,
  };
};

const domainToDAO = (p: ExtraSection): ExtraSectionDAO => {
  return { ...p, _id: p.id };
};

const DAOtoDomain = (p: ExtraSectionDAO): ExtraSection => {
  return {
    ...p,
    id: p._id,
    status: p.status as ItemStatus,
    extras: p.extras.map((es) => mapExtraEntryOnSectionDAOtoDomain(es)),
  };
};

const domainToDTO = (p: ExtraSection): ExtraSectionDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ExtraSectionDAO): ExtraSectionDTO => {
  const { _id, ...payload } = p;
  return {
    id: _id,
    ...payload,
  };
};

const extraSectionMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraSectionMapper;
