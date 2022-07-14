import React from "react";
import { CardDataModel } from "../models/card.model";

interface CardProps {
  cardData: CardDataModel;
}

const Card: React.FC<CardProps> = ({
  cardData: { days, destination, images, priceDetail, title },
}) => {
  return (
    <div className="cardContainer">
      <div data-testid="card_inner" className="cardInner">
        <div className="header">
          {priceDetail.pricingPercentage > 0 && (
            <h5 className="discount">-{priceDetail.pricingPercentage}%</h5>
          )}
          <h2>{destination}</h2>
          <h4>{days} Days</h4>
          <div className="gradientOverlay" />
          <img src={images[0].desktop} alt={title} />
        </div>
        <div className="details">
          <p className="title">{title}</p>
          <p className="price">
            From <span className="from">{priceDetail.oldPriceBeautify}</span>{" "}
            <span className="actualPrice">{priceDetail.fromPriceBeautify}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
