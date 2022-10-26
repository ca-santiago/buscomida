import {
  ItemStatus,
  ExtraEntrySection,
  ExtraEntryOnSection,
} from "../domain/models/types";
import {
  ExtraEntryOnSectionDAO,
  ExtraEntrySectionDAO,
  ExtraEntrySectionDTO,
} from "./types";

const mapExtraEntryOnSectionDAOtoDomain = (
  e: ExtraEntryOnSectionDAO
): ExtraEntryOnSection => {
  return {
    ...e,
    status: e.status as ItemStatus,
  };
};

const domainToDAO = (p: ExtraEntrySection): ExtraEntrySectionDAO => {
  return { ...p };
};

const DAOtoDomain = (p: ExtraEntrySectionDAO): ExtraEntrySection => {
  return {
    ...p,
    status: p.status as ItemStatus,
    extras: p.extras.map((es) => mapExtraEntryOnSectionDAOtoDomain(es)),
  };
};

const domainToDTO = (p: ExtraEntrySection): ExtraEntrySectionDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ExtraEntrySectionDAO): ExtraEntrySectionDTO => {
  return DAOtoDomain(p);
};

const extraSectionMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default extraSectionMapper;
