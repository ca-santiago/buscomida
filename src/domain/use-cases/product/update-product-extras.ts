import extraMapper from "../../../mappers/extra";
import productMapper from "../../../mappers/product";
import { ProductPublicDTO } from "../../../mappers/types";
import { extraService, productService } from "../../../services";
import { Extra, Product } from "../../models/types";

const extraExistAndIsNotDraft = (e: Extra | null): Boolean => {
  if (!e) return false;
  // TODO: replace when it is possible to publish extras
  // return e.status !== "DRAFT";
  return true;
};

const getProductOrError = async (id: string): Promise<Product> => {
  const product = await productService
    .getById(id)
    .then((p) => (p ? productMapper.DAOtoDomain(p) : null));

  if (!product) {
    // TODO - Throw 404 error
    throw new Error("Product does not exist");
  }

  if (product.status !== "DRAFT") {
    // TODO - Throw unauthorized
    throw new Error("Published products cannot be udpated");
  }

  return product;
};

interface UpdateProductExtrasProps {
  pId: string;
  extraIds: string[];
}

export const updateProductExtras = async ({
  extraIds,
  pId,
}: UpdateProductExtrasProps): Promise<ProductPublicDTO> => {
  const product = await getProductOrError(pId);

  // Fetch extras
  const extrasFromDatabase = await Promise.all(
    extraIds.map((id) => {
      return extraService.getById(id);
    })
  ).then((extras) => {
    return extras.map((e) => (e ? extraMapper.DAOtoDomain(e) : null));
  });

  // Validate extras
  // - They all exist
  // - They are not draft
  const theyExistsAndAreNotDraft = extrasFromDatabase.every(
    extraExistAndIsNotDraft
  );

  if (theyExistsAndAreNotDraft === false) {
    // TODO - Throw 400
    throw new Error("Invalid extras");
  }

  const updatedProduct = {
    ...product,
    extras: extraIds,
    // TODO - Create a function that upsert the new ids in order. Keep the existing ids and remove the deleted ones
    extrasListOrder: [],
  };

  await productService.save(productMapper.domainToDAO(updatedProduct));
  return productMapper.domainToDTO(updatedProduct);
};

interface UpdateProductExtrasSectionProps {}
interface UpdateProductExtrasOrderProps {}
