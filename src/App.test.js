import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the title correctly", () => {
    render(<App />);
    const titleElement = screen.getByText(/STAR WARS/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the winner correctly", () => {
    render(<App />);
    const winnerElement = screen.getByText(/WINNER -/i);
    expect(winnerElement).toBeInTheDocument();
  });

  test("loads more spaceships on button click", () => {
    render(<App />);
    const loadMoreButton = screen.getByRole("button", {name: /Load More/i});
    fireEvent.click(loadMoreButton);
    // Assert the loading state is activated
    const loaderElement = screen.getByAltText(/loading/i);
    expect(loaderElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
