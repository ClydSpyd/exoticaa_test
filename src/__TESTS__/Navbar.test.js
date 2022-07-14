/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

describe("render nav elements", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    );
  });

  it("renders Exoticaa logo", () => {
    const logo = screen.getByTestId("nav_logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders correct number of nav items", () => {
    const buttons = screen.getAllByTestId("nav_item");
    expect(buttons).toHaveLength(6);
  });

  it("renders market picker", () => {
    const picker = screen.getByTestId("rfs-btn");
    expect(picker).toBeInTheDocument();
  });
});
