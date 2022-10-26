// ?? Future release status?
/**
 * - DRAFT = Under creation, no ready to use. Can be used as a future release flag
 * - ACTIVE = In use
 * - DISABLED = Temporal disable, active in the near future
 * - DISCONTINUED = No longer available. No future use
 */
export type ItemStatus = "DRAFT" | "ACTIVE" | "DISABLED" | "DISCONTINUED";

export type Price = number;

export interface ExtraEntryOnSection {
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
export interface ExtraEntrySection {
  id: string;
  /** To be used as final order name */
  title: string;
  /** To be displayed as a prefix of the title on buyers view */
  // eg. {titlePrefix} {title} - Agregue un aderezo
  titlePrefix: string;
  description: string;
  status: ItemStatus;

  createdAt: string;
  releaseDate: string;

  extras: ExtraEntryOnSection[];

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
