import React from "react";
import { HeroDataModel } from "../models/hero.model";
import DOMPurify from "dompurify";

interface HeroProps {
  heroData: HeroDataModel;
}

const Hero: React.FC<HeroProps> = ({ heroData: { image, title } }) => {
  const sanitizedTitle = DOMPurify.sanitize(title);

  return (
    <div className="heroContainer">
      <img src={image[0].url} alt="hero img" />
      <div
        data-testid="hero_header"
        className="titleHTML"
        dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
      />
      <div className="heroSubhead">
        <h5 className="yellowBlock">Savings of up to $1,000!</h5>
        <h5 className="white">Where will you go?</h5>
      </div>
      <div data-testid="deals_btn" className="dealsBtn">
        Travel deals
      </div>
    </div>
  );
};

export default Hero;
