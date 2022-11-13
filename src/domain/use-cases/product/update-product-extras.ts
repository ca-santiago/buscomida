import extraMapper from "../../../mappers/extra";
import extraSectionMapper from "../../../mappers/extra-entry-section";
import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import {
  extraSectionService,
  extraService,
  productService,
} from "../../../services";
import { BadResourceUpdateValues, ForbiddenError } from "../../errors";
import { Product } from "../../models/types";
import { existAndIsActive } from "../helpers/exist-draft";
import { getProductOrError } from "./product-or-error";

export interface UpdateProductExtrasProps {
  pId: string;
  extrasIds: string[];
  extrasSectionsIds: string[];
  order: string[];
}

export const updateProductExtras = async ({
  pId,
  order,
  extrasIds,
  extrasSectionsIds,
}: UpdateProductExtrasProps): Promise<ProductPublicDTO> => {
  const product = await getProductOrError(pId);

  if (product.status !== "DRAFT") {
    throw new ForbiddenError("Published products cannot be udpated");
  }

  // Fetch extras
  const extrasFromDatabase = await Promise.all(
    extrasIds.map((id) => {
      return extraService.getById(id);
    })
  ).then((extras) => {
    return extras.map((e) => (e ? extraMapper.DAOtoDomain(e) : null));
  });

  // Fetch extra sections
  const extraSectionsFromDatabase = await Promise.all(
    extrasSectionsIds.map((id) => {
      return extraSectionService.getById(id);
    })
  ).then((extras) => {
    return extras.map((e) => (e ? extraSectionMapper.DAOtoDomain(e) : null));
  });

  // Validate extras
  // - They all exist
  // - They are not draft
  const allExtrasAreValid = extrasFromDatabase.every(existAndIsActive);
  const allSectionAreValid = extraSectionsFromDatabase.every(existAndIsActive);

  if (!allExtrasAreValid || !allSectionAreValid) {
    throw new BadResourceUpdateValues(
      "You can only use existing and active extras"
    );
  }

  // TODO: Sanitize list order, extras and extra sections
  // sanitize includes: remove duplicated.
  const updatedProduct: Product = {
    ...product,
    extras: extrasIds,
    extrasSections: extrasSectionsIds,
    extrasListOrder: order,
  };

  await productService.save(productMapper.domainToDAO(updatedProduct));
  return productMapper.domainToDTO(updatedProduct);
};
