import { CardDataModel } from "./card.model";

export interface SlideDataModel {
  name: string;
  description: string;
  slug: string;
  type: string;
  title: string;
  icon: string;
  background: string;
  cards: CardDataModel[];
}
