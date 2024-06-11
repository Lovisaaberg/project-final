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
import arrowRight from "../../assets/icons/rightarrow.png";
import arrowLeft from "../../assets/icons/leftarrow.png";

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PlanetImage = styled.img`
  height: ${(props) => (props.saturnimg ? "50px" : "50px")};
  width: ${(props) => (props.saturnimg ? "95px" : "50px")};
  cursor: pointer;
  margin: 0 0 40px 0;
`;
const ArrowLeft = styled.img`
  width: 20px;
  margin: 0 6px 55px 20px;
`;
const ArrowRight = styled.img`
  width: 20px;
  margin: 0 20px 55px 6px;
`;

const PlanetNameLink = styled.p`
  font-family: var(--font-family-text);
  text-decoration: none;
  color: var(--text-color-primary);
  margin-bottom: 58px;
`;

const PlanetImagesContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PrevPlanetContainer = styled.div`
  display: flex;
  justify-content: flex-;
  align-items: center;
  margin: 0 10px;
`;

const NextPlanetContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  margin-left: auto;

  @media (min-width: 468px) {
    margin-left: auto;
  }
`;

const planets = [
  { name: "sun", image: sunImg },
  { name: "mercury", image: mercuryImg },
  { name: "venus", image: venusImg },
  { name: "tellus", image: tellusImg },
  { name: "moon", image: moonImg },
  { name: "mars", image: marsImg },
  { name: "jupiter", image: jupiterImg },
  { name: "saturn", image: saturnImg },
  { name: "uranus", image: uranusImg },
  { name: "neptune", image: neptuneImg },
  { name: "pluto", image: plutoImg },
];

const getPlanetPath = (planetName) => {
  if (planetName === "sun" || planetName === "moon") {
    return `/${planetName}`;
  }
  return `/planets/${planetName}`;
};

export const PlanetNavigation = () => {
  const location = useLocation();
  const currentPlanetName = location.pathname.split("/").pop();

  const currentPlanetIndex = planets.findIndex(
    (planet) => planet.name === currentPlanetName
  );

  // Handle invalid planet names by defaulting to the first planet
  const validIndex = currentPlanetIndex !== -1;
  const index = validIndex ? currentPlanetIndex : 0;

  const prevPlanetIndex = index === 0 ? planets.length - 1 : index - 1;
  const nextPlanetIndex = index === planets.length - 1 ? 0 : index + 1;

  const prevPlanet = planets[prevPlanetIndex];
  const nextPlanet = planets[nextPlanetIndex];

  return (
    <NavigationContainer>
      <PlanetImagesContainer>
        <Link to={getPlanetPath(prevPlanet.name)}>
          <ArrowLeft src={arrowLeft} alt="Left arrow icon" />
          <PlanetImage src={prevPlanet.image} 
          alt={prevPlanet.name}
          saturnimg={prevPlanet.name === "saturn"} />
        </Link>
      </PlanetImagesContainer>

      <PrevPlanetContainer>
        <PlanetNameLink>{prevPlanet.name.toUpperCase()}</PlanetNameLink>
      </PrevPlanetContainer>

      <NextPlanetContainer>
        <PlanetNameLink>{nextPlanet.name.toUpperCase()}</PlanetNameLink>
      </NextPlanetContainer>

      <PlanetImagesContainer>
        <Link to={getPlanetPath(nextPlanet.name)}>
          <PlanetImage src={nextPlanet.image} 
          alt={nextPlanet.name}
          saturnimg={nextPlanet.name === "saturn"} />
          <ArrowRight src={arrowRight} alt="Right arrow icon" />
        </Link>
      </PlanetImagesContainer>
    </NavigationContainer>
  );
};
