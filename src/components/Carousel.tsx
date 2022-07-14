import React from "react";
import Slider from "react-slick";
import { useWindowSize } from "../hooks/useWindowSize";
import { SlideDataModel } from "../models/slide.model";
import Card from "./Card";

interface CarouselProps {
  carouselData: SlideDataModel;
}

const CustomArrow = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <div className="chevron" />{" "}
  </div>
);

const returnSliderSettings = (width: number) => {
  return {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow:
      width > 1400 ? 4.5 : width > 1050 ? 3.5 : width > 800 ? 2.5 : 1.5,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <CustomArrow className="arrow slick-prev" />,
    nextArrow: <CustomArrow className="arrow slick-next" />,
  };
};

const Carousel: React.FC<CarouselProps> = ({
  carouselData: { name, cards },
}) => {
  const { width } = useWindowSize();

  return (
    <div data-testid="carousel_container" className="carousel">
      <div className="titleBar">
        <div className="text">
          <h1 className="laneTitle">{name}</h1>
          <p className="responsiveTrips">
            {Math.round(cards.length * 5.3)} available trips
          </p>
          <p className="laneDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="moreTrips">
          <div className="seeMoreBtn">See more trips</div>
          <div className="tripsAvailable">
            <div className="line" />
            <p>{Math.round(cards.length * 5.3)} available trips</p>
            <div className="line" />
          </div>
        </div>
      </div>
      <Slider {...returnSliderSettings(width)}>
        {cards.map((item) => (
          <Card key={item.id} cardData={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
