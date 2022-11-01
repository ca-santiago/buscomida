export * from './product';
export * from './extra/extra';
export * from './extra-entry';
export * from './extra-section';

import { productService } from "./product";
import { extraService } from "./extra";
import { extraEntryService } from "./extra-entry";
import { extraSectionService } from "./extra-section";

export default {
  productService,
  extraService,
  extraEntryService,
  extraSectionService,
};
