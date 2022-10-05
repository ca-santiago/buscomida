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

export interface ProductVisualPublicDTO {
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
