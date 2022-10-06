import { ItemStatus, Product } from "../domain/models/types";
import { ProductDAO, ProductPublicDTO } from "./types";

const domainToDAO = (p: Product): ProductDAO => {
  return { ...p };
};

const DAOtoDomain = (p: ProductDAO): Product => {
  return { ...p, status: p.status as ItemStatus };
};

const domainToDTO = (p: Product): ProductPublicDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ProductDAO): ProductPublicDTO => {
  return DAOtoDomain(p);
};

const productMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default productMapper;
