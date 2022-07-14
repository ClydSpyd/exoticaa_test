type Unknown = null | any;

interface ImgInterface {
  desktop: string;
  mobile: string;
  tablet: string;
}

interface PriceInterface {
  discountSaved: number;
  fromPrice: number;
  fromPriceBeautify: string;
  oldPriceBeautify: string;
  pricePerNight: string;
  pricingPercentage: number;
}

export interface CardDataModel {
  id: number;
  title: string;
  destination: string;
  images: ImgInterface[];
  days: number;
  url: string;
  map: Unknown;
  highlights: Unknown;
  includes: Unknown;
  priceDetail: PriceInterface;
  tags: Unknown;
  crafterDetail: Unknown;
  hasPrivateTour: Unknown;
  hasSoloTraveler: Unknown;
  headline: Unknown;
  tagline: Unknown;
  tagHeadLine: Unknown;
  isLandOnly: boolean;
  isValid: boolean;
  extraNights: number;
}
