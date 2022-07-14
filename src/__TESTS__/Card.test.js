/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

describe("render nav elements", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Card
          cardData={{
            days: 10,
            destination: "",
            images: [{}],
            priceDetail: {},
            title: "",
          }}
        />
      </QueryClientProvider>
    );
  });

  it("renders inner container", () => {
    const cardInner = screen.getByTestId("card_inner");
    expect(cardInner).toBeInTheDocument();
  });

  it("renders correct children of carousel container", () => {
    const cardInner = screen.getByTestId("card_inner");
    expect(cardInner.childNodes[0].classList.contains("header")).toBeTruthy();

    expect(cardInner.childNodes[1].classList.contains("details")).toBeTruthy();
  });
});
