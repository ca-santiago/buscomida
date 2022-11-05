import extraSectionMapper from "../../../mappers/extra-entry-section";
import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import { extraSectionService, productService } from "../../../services";
import { ExtraEntrySection, Product } from "../../models/types";
import { getProductOrError } from "./helpers/product-or-error";

const extraSectionExistAndIsNotDraft = (
  e: ExtraEntrySection | null
): Boolean => {
  if (!e) return false;
  // TODO: replace when it is possible to publish extras
  // return e.status !== "DRAFT";
  return true;
};

interface UpdateProductExtrasSectionProps {
  pId: string;
  sectionsIds: string[];
}

export const updateProductExtrasSections = async ({
  sectionsIds,
  pId,
}: UpdateProductExtrasSectionProps): Promise<ProductPublicDTO> => {
  const product = await getProductOrError(pId);

  // Fetch extras
  const extrasSectionsFromDatabase = await Promise.all(
    sectionsIds.map((id) => {
      return extraSectionService.getById(id);
    })
  ).then((extras) => {
    return extras.map((e) => (e ? extraSectionMapper.DAOtoDomain(e) : null));
  });

  // Validate extras
  // - They all exist
  // - They are not draft
  const theyExistsAndAreNotDraft = extrasSectionsFromDatabase.every(
    extraSectionExistAndIsNotDraft
  );

  if (theyExistsAndAreNotDraft === false) {
    // TODO - Throw 400
    throw new Error("Invalid extras");
  }

  const updatedProduct: Product = {
    ...product,
    extrasSections: sectionsIds,
    // TODO - Create a function that upsert the new ids in order. Keep the existing ids and remove the deleted ones
    extrasListOrder: [],
  };

  await productService.save(productMapper.domainToDAO(updatedProduct));
  return productMapper.domainToDTO(updatedProduct);
};
