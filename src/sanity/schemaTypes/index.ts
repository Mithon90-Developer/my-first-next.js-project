import { type SchemaTypeDefinition } from "sanity";

import { heroType } from "./hero";
import { aboutType } from "./about";
import { chooseUs2Type } from "./choose-us2";
import { counterType } from "./counter";
import { featuresType } from "./features";
import { processType } from "./process";
import { galleryType } from "./gallery";
import { blogType } from "./blog";
import { serviceType } from "./service";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroType,
    aboutType,
    chooseUs2Type,
    counterType,
    featuresType,
    processType,
    galleryType,
    blogType,
    serviceType,
  ],
};