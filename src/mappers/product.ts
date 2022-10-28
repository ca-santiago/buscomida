import { ItemStatus, Product } from "../domain/models/types";
import { ProductDAO, ProductPublicDTO } from "./types";

const domainToDAO = (p: Product): ProductDAO => {
  return { ...p, _id: p.id };
};

const DAOtoDomain = (p: ProductDAO): Product => {
  return { ...p, id: p._id, status: p.status as ItemStatus };
};

const domainToDTO = (p: Product): ProductPublicDTO => {
  return {
    ...p,
    _id: p.id,
    status: p.status.toString(),
  };
};

const DAOToDTO = (p: ProductDAO): ProductPublicDTO => {
  return { ...p };
};

const productMapper = {
  domainToDAO,
  DAOtoDomain,
  domainToDTO,
  DAOToDTO,
};

export default productMapper;
