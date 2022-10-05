import { ItemStatus, Product } from "../../domain/models/types";
import { ProductDAO, ProductPublicDTO } from "./product.types";

export const domainToDAO = (p: Product): ProductDAO => {
  return { ...p };
};

export const DAOtoDomain = (p: ProductDAO): Product => {
  return { ...p, status: p.status as ItemStatus };
};

export const domainToDTO = (p: Product): ProductPublicDTO => {
  return {
    ...p,
    status: p.status.toString(),
  };
};

export const DAOToDTO = (p: ProductDAO): ProductPublicDTO => {
  return DAOtoDomain(p);
};
