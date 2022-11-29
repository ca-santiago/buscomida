export interface ProductDAO {
  _id: string;
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
  _id: string;
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
  _id: string;
  displayName: string;
  description: string;
  status: string;
  addedPriceByUnit: number;
  createdAt: string;
  publishedAt: string;
}

export interface ExtraSectionItemDAO {
  extraId: string;
  addedPriceByUnit: number;
  minSelection: number;
  maxSelection: number;
  status: string;
}

export interface ExtraSectionDAO {
  _id: string;
  title: string;
  titlePrefix: string;
  showFirstItemName: boolean;
  description: string;
  status: string;
  createdAt: string;
  releaseDate: string;
  extras: ExtraSectionItemDAO[];
  maxSelection: number;
  minSelection: number;
}

export interface ExtraDTO {
  _id: string;
  displayName: string;
  description: string;
  status: string;
  addedPriceByUnit: number;
  createdAt: string;
  publishedAt: string;
}

export interface ExtraSectionItemDTO {
  extraId: string;
  addedPriceByUnit: number;
  minSelection: number;
  maxSelection: number;
  status: string;
}

export interface ExtraSectionDTO {
  id: string;
  title: string;
  titlePrefix: string;
  showFirstItemName: boolean;
  description: string;
  status: string;
  createdAt: string;
  releaseDate: string;
  extras: ExtraSectionItemDTO[];
  maxSelection: number;
  minSelection: number;
}

