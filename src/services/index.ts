export * from './product';
export * from './extra/extra';
export * from './extra-section';

import { productService } from "./product";
import { extraService } from "./extra";
import { extraSectionService } from "./extra-section";

export default {
  productService,
  extraService,
  extraSectionService,
};
