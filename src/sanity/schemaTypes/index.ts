import { type SchemaTypeDefinition } from "sanity";

import { headerMenuType } from "./headerMenu";
import { heroType } from "./hero";
import { aboutType } from "./about";
import { chooseUs2Type } from "./choose-us2";
import { counterType } from "./counter";
import { featuresType } from "./features";
import { processType } from "./process";
import { galleryType } from "./gallery";
import { blogType } from "./blog";
import { serviceType } from "./service";
import { ctaType } from "./cta";
import { footerType } from "./footer";

import { contactMessageType } from "./contactMessage";


// Pages
import { aboutPageType } from "./aboutPage";  
import { contactPageType } from "./contactPage";  

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    headerMenuType,
    heroType,
    aboutType,
    chooseUs2Type,
    counterType,
    featuresType,
    processType,
    galleryType,
    blogType,
    serviceType,
    ctaType,
    footerType,


    // Pages
    aboutPageType,
    contactPageType,

    contactMessageType,
  ],
};