import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import mercuryImg from "../../assets/images/mercury.png";
import venusImg from "../../assets/images/venus.png";
import tellusImg from "../../assets/images/tellus.png";
import marsImg from "../../assets/images/mars.png";
import jupiterImg from "../../assets/images/jupiter.png";
import saturnImg from "../../assets/images/saturn.png";
import uranusImg from "../../assets/images/uranus.png";
import neptuneImg from "../../assets/images/neptune.png";
import plutoImg from "../../assets/images/pluto.png";
import sunImg from "../../assets/images/sun.png";
import moonImg from "../../assets/images/moon.png";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PlanetImage = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const planets = [
  { name: "mercury", image: mercuryImg },
  { name: "venus", image: venusImg },
  { name: "tellus", image: tellusImg },
  { name: "mars", image: marsImg },
  { name: "jupiter", image: jupiterImg },
  { name: "saturn", image: saturnImg },
  { name: "uranus", image: uranusImg },
  { name: "neptune", image: neptuneImg },
  { name: "pluto", image: plutoImg },
  { name: "sun", image: sunImg },
  { name: "moon", image: moonImg },
];

const PlanetNavigation = () => {
  //used to get the current URL, extract the current planet's name from the URL 
  //and find its index in the planets array.
  //.pop Removes the last element from an array and returns it. If the 
  //array is empty, undefined is returned and the array is not modified.
  const location = useLocation();
  const currentPlanetName = location.pathname.split("/").pop();
  const currentPlanetIndex = planets.findIndex(
    (planet) => planet.name === currentPlanetName
  );

  //prevPlanetIndex & nextPlanetIndex are calculated to 
  //wrap around the array in an infinite loop.
  const prevPlanetIndex =
    currentPlanetIndex === 0 ? planets.length - 1 : currentPlanetIndex - 1;
  const nextPlanetIndex =
    currentPlanetIndex === planets.length - 1 ? 0 : currentPlanetIndex + 1;

  const prevPlanet = planets[prevPlanetIndex];
  const nextPlanet = planets[nextPlanetIndex];

  return (
    <NavigationContainer>
      <Link
        to={
          prevPlanet.name === "sun"
            ? "/sun"
            : prevPlanet.name === "moon"
            ? "/moon"
            : `/planets/${prevPlanet.name}`
        }>
        <PlanetImage src={prevPlanet.image} alt={prevPlanet.name} />
      </Link>
      <Link
        to={
          nextPlanet.name === "sun"
            ? "/sun"
            : nextPlanet.name === "moon"
            ? "/moon"
            : `/planets/${nextPlanet.name}`
        }>
        <PlanetImage src={nextPlanet.image} alt={nextPlanet.name} />
      </Link>
    </NavigationContainer>
  );
};

export default PlanetNavigation;
