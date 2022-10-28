export * from './product';
export * from './extra/extra';
export * from './extra-entry';
export * from './extra-entry-section';

import { productService } from "./product";
import { extraService } from "./extra";

export default {
  productService,
  extraService
};
