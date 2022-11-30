import { ProductInstance } from "../domain/models/types";
import { ProductInstanceDAO, ProductInstanceDTO } from "./types";

const domainToDAO = (p: ProductInstance): ProductInstanceDAO => {
  const { id, ...pInstance } = p;
  return { ...pInstance, _id: id };
};

const DAOtoDomain = (p: ProductInstanceDAO): ProductInstance => {
  const { _id, ...pInstance } = p;
  return { ...pInstance, id: _id };
};

const domainToDTO = (p: ProductInstance): ProductInstanceDTO => {
  return { ...p };
};

const DAOToDTO = (p: ProductInstanceDAO): ProductInstanceDTO => {
  const { _id, ...pInstance } = p;
  return { ...pInstance, id: _id };
};

const productInstanceMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default productInstanceMapper;
