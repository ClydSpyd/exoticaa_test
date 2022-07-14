/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

describe("render nav elements", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Hero heroData={{ image: [{ url: "", text: "" }] }} />
      </QueryClientProvider>
    );
  });

  it("renders hero header", () => {
    const header = screen.getByTestId("hero_header");
    expect(header).toBeInTheDocument();
  });

  it("renders deals button", () => {
    const button = screen.getByTestId("deals_btn");
    expect(button).toBeInTheDocument();
  });
});
