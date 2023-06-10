import {useEffect, useState} from "react";
import "./App.css";
import SpaceshipCard from "./components/SpaceshipCard/SpaceshipCard";
import Loader from "./components/Loader/Loader";
import trophy from "./images/trophy.png";

const SPACESHIP_URL = "https://swapi.dev/api/starships/";

let winner = "";

function App() {
  const [spaceshipList, setSpaceshipList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const result = data.results.filter((spaceship) => spaceship.crew < 10);
        console.log(result);
        setNextUrl(data.next);
        setSpaceshipList([...spaceshipList, ...result]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadSpaceship = () => {
    setIsLoading(true);
    fetchData(nextUrl);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(SPACESHIP_URL);
  }, []);

  useEffect(() => {
    let maxFilm = {name: "", num: 0};
    spaceshipList.forEach((spaceship) => {
      if (spaceship.films.length > maxFilm.num) {
        maxFilm.num = spaceship.films.length;
        maxFilm.name = spaceship.name;
      }
    });

    winner = maxFilm.name;
  });
  return (
    <div className='bg-image pb'>
      {isLoading ? <Loader /> : null}

      <div className='container'>
        <h1 className='text-center'>STAR WARS</h1>
        <div className='winner mt'>
          <img src={trophy} width={"50px"} alt='trophy-winner' />
          <h4
            style={{
              display: "inline-block",
              color: "#f9e50d",
              fontSize: "2rem",
            }}
          >
            WINNER - {winner}
          </h4>
        </div>
        {spaceshipList.length > 0
          ? spaceshipList?.map((spaceship) => {
              const {name, model, films} = spaceship;
              return (
                <SpaceshipCard
                  key={name}
                  name={name}
                  model={model}
                  filmNum={films.length}
                />
              );
            })
          : null}

        <button className='button' onClick={loadSpaceship}>
          {" "}
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
