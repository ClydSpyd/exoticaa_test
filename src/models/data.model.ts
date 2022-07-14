import { HeroDataModel } from "./hero.model";
import { SlideDataModel } from "./slide.model";

export interface ResponseDataModel {
  hero: HeroDataModel;
  slides: SlideDataModel[];
}
