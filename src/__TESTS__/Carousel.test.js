/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

describe("render nav elements", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Carousel carouselData={{ name: "", description: "", cards: [] }} />
      </QueryClientProvider>
    );
  });

  it("renders container", () => {
    const carouselContainer = screen.getByTestId("carousel_container");
    expect(carouselContainer).toBeInTheDocument();
  });

  it("renders correct children of carousel container", () => {
    const carouselContainer = screen.getByTestId("carousel_container");
    expect(
      carouselContainer.childNodes[0].classList.contains("titleBar")
    ).toBeTruthy();

    expect(
      carouselContainer.childNodes[1].classList.contains("slick-slider")
    ).toBeTruthy();
  });
});
