import React, { useId } from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { ResponseDataModel } from "../models/data.model";

interface HomeProps {
  data: ResponseDataModel;
}

const Home: React.FC<HomeProps> = ({ data: { slides, hero: heroData } }) => {
  const map_key_prefix = useId();
  return (
    <div className="home">
      <Hero heroData={heroData} />
      {slides.map((item, idx) => {
        return (
          <Carousel key={`${map_key_prefix}_${idx}`} carouselData={item} />
        );
      })}
    </div>
  );
};

export default Home;
