// ?? Future release status?
/**
 * - DRAFT = Under creation, no ready to use. Can be used as a future release flag
 * - ACTIVE = In use
 * - DISABLED = Temporal disable, active in the near future
 * - DISCONTINUED = No longer available. No future use
 */
export type ItemStatus = "DRAFT" | "ACTIVE" | "DISABLED" | "DISCONTINUED";
export const ItemStatusKeys = ["DRAFT", "ACTIVE", "DISABLED", "DISCONTINUED"];
export enum ItemStatusEnum {
  "DRAFT" = "DRAFT",
  "ACTIVE" = "ACTIVE",
  "DISABLED" = "DISABLED",
  "DISCONTINUED" = "DISCONTINUED",
}

export type Price = number;

export interface ExtraSectionItem {
  /**
   * Id from {@link Extra}
   */
  extraId: string;
  addedPriceByUnit: Price;

  minSelection: number;
  maxSelection: number;
  status: ItemStatus;
}

/**
 * A selection of many {@link Extra} under a set of given rules, as selectable options for a final product
 */
export interface ExtraSection {
  id: string;
  /** To be used as final order name */
  title: string;
  /** To be displayed as a prefix of the title on buyers view */
  // eg. {titlePrefix} {title} - Agregue un aderezo
  titlePrefix: string;
  // By default single item sections does not show first item name
  // so title is the unique string in section component
  showFirstItemName: boolean;
  description: string;
  status: ItemStatus;

  createdAt: string;
  releaseDate: string;

  extras: ExtraSectionItem[];

  maxSelection: number;
  minSelection: number;
}

/**
 * It is the representation of {@link Extra} on a selectable item for a product.
 */
export interface ExtraEntry {
  id: string;
  /** To be used as name of the final order  */
  title: string;
  /** To be displayed as a prefix of the title on buyers view */
  // eg. {titlePrefix} {title} - {Agregue un} {aderezo}
  titlePrefix: string;
  status: ItemStatus;
  /**
   * Id from {@link Extra}
   */
  extraId: string;
  minSelection: number;
  maxSelection: number;
  addedPrice: Price;
  createdAt: string;
}

export interface Product {
  id: string;
  displayName: string;
  description: string;
  status: ItemStatus;
  price: Price;

  /**
   * A group of extra with max and min limit of selected items. This is a reference if extra interface id
   */
  extrasSections: string[];
  /**
   * Single product extra item, most of them yes or not choise
   */
  extras: string[];
  extrasListOrder: string[];

  createdAt: string;
  releaseDate: string;
}

/**
 * This is not a product itself. It is a single undivisable item.
 * It is the representation of a simple item of the business. It can be lemons, a topin, sauce, relish, etc.
 */
export interface Extra {
  id: string;
  displayName: string;
  description: string;
  status: ItemStatus;
  addedPriceByUnit: Price;
  createdAt: string;
  publishedAt: string;
}

// Future interface to allow Extras to have their own extras

// Add a complement
// - 2 + Cajita feliz
//  * Papas chicas
//  * refresco chico
export interface ExtraItem {
  id: string;
  displayName: string;
  description: string;
  minSelection: number;
  maxSelection: number;
  status: ItemStatus;
}

// Cart items


/**
 * A PInstance should be created when confirming product configuration on UI
 * So all instances correspond to the current cart.
 * 
 * PInstance creation need a set of validation/reconciliation functions
 * To validate:
 * - product status, can it be put to a cart? Buy?
 * - extra cases status and content, 
 *  - section details exists for this product and are available? 
 * - extras and count are valid.
 *  - selected extras exists and are valid and the selected amount is withing boundaries?
 * 
 * If so, PInstance follows selected product rules and can be instantiated.
 */
export interface ProductInstance {
  id: string;
  productId: string;
  checkoutDate: string;
  sectionsDetails: ExtraSectionDetails[];
}

export interface ExtraSectionDetails {
  sectionId: string;
  extras: ExtraDetails[];
}

export interface ExtraDetails {
  extraId: string;
  count: number;
}
