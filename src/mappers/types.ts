export interface ProductDAO {
  id: string;
  displayName: string;
  description: string;
  status: string;
  price: number;
  extrasSections: string[];
  extras: string[];
  extrasListOrder: string[];
  createdAt: string;
  releaseDate: string;
}

export interface ProductVisualDAO {
  ref: string;
  type: string;
}

export interface ProductPublicDTO {
  id: string;
  displayName: string;
  description: string;
  createdAt: string;
  status: string;
  price: number;

  extrasSections: string[];
  extras: string[];
  extrasListOrder: string[];
  releaseDate: string;
}

export interface ProductVisualPublicDTO {
  ref: string;
  type: string;
}


// EXTRA

export interface ExtraDAO {
  id: string;
  displayName: string;
  description: string;
  status: string;
  addedPriceByUnit: number;
  createdAt: string;
  publishedAt: string;
}

export interface ExtraEntryDAO {
  id: string;
  title: string;
  titlePrefix: string;
  status: string;
  extraId: string;
  minSelection: number;
  maxSelection: number;
  addedPrice: number;
  createdAt: string;
}

export interface ExtraEntryOnSectionDAO {
  extraId: string;
  addedPriceByUnit: number;
  minSelection: number;
  maxSelection: number;
  status: string;
}

export interface ExtraEntrySectionDAO {
  id: string;
  title: string;
  titlePrefix: string;
  description: string;
  status: string;
  createdAt: string;
  releaseDate: string;
  extras: ExtraEntryOnSectionDAO[];
  maxSelection: number;
  minSelection: number;
}

export interface ExtraDTO {
  id: string;
  displayName: string;
  description: string;
  status: string;
  addedPriceByUnit: number;
  createdAt: string;
  publishedAt: string;
}

export interface ExtraEntryDTO {
  id: string;
  title: string;
  titlePrefix: string;
  status: string;
  extraId: string;
  minSelection: number;
  maxSelection: number;
  addedPrice: number;
  createdAt: string;
}

export interface ExtraEntryOnSectionDTO {
  extraId: string;
  addedPriceByUnit: number;
  minSelection: number;
  maxSelection: number;
  status: string;
}

export interface ExtraEntrySectionDTO {
  id: string;
  title: string;
  titlePrefix: string;
  description: string;
  status: string;
  createdAt: string;
  releaseDate: string;
  extras: ExtraEntryOnSectionDAO[];
  maxSelection: number;
  minSelection: number;
}

