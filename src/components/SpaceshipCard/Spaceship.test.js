import {render, screen} from "@testing-library/react";
import SpaceshipCard from "./SpaceshipCard";

describe("SpaceshipCard", () => {
  const spaceshipData = {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    filmNum: 3,
  };

  test("renders spaceship details correctly", () => {
    render(
      <SpaceshipCard
        name={spaceshipData.name}
        model={spaceshipData.model}
        filmNum={spaceshipData.filmNum}
      />
    );

    const nameElement = screen.getByText(spaceshipData.name);
    const modelElement = screen.getByText(/Model/i);
    const filmNumElement = screen.getByText(/Numer Of Films/i);

    expect(nameElement).toBeInTheDocument();
    expect(modelElement).toBeInTheDocument();
    expect(filmNumElement).toBeInTheDocument();

    const modelValueElement = screen.getByText(spaceshipData.model);
    expect(modelValueElement).toBeInTheDocument();

    const filmNumValueElement = screen.getByText(
      spaceshipData.filmNum.toString()
    );
    expect(filmNumValueElement).toBeInTheDocument();
  });
});
