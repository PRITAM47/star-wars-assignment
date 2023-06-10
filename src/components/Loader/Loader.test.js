import {render, screen} from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  test("renders loading GIF", () => {
    render(<Loader />);
    const loadingImage = screen.getByAltText("loading");
    expect(loadingImage).toBeInTheDocument();
  });
});
