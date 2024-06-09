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
import PlanetNavigation from "./PlanetNavigation";

const PlanetPage = styled.div`
  h1 {
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
`;

const PlanetImg = styled.img`
  height: 300px;
  width: 300px;
`;

const planetImages = {
  Mercury: mercuryImg,
  Venus: venusImg,
  Tellus: tellusImg,
  Mars: marsImg,
  Jupiter: jupiterImg,
  Saturn: saturnImg,
  Uranus: uranusImg,
  Neptune: neptuneImg,
  Pluto: plutoImg,
};

export const PlanetContent = ({ onePlanet }) => {
  const surfaceTemperature = onePlanet.surfaceTemperature;
  const planetImg = planetImages[onePlanet.name];

  return (
    <div>
      <PlanetPage>
        <h1>{onePlanet.name}</h1>
        <PlanetImg src={planetImg} alt={onePlanet.name} />
        <p>Nickname: {onePlanet.nickname}</p>
        <p>Moons: {onePlanet.moons}</p>
        <p>Asteroids: {onePlanet.asteroids}</p>
        <p>Material: {onePlanet.material}</p>
        {surfaceTemperature && (
          <>
            {typeof surfaceTemperature === "string" ? (
              <p>Surface temperature: {surfaceTemperature}</p>
            ) : (
              <>
                {surfaceTemperature.day && (
                  <p>Day temperature: {surfaceTemperature.day}</p>
                )}
                {surfaceTemperature.night && (
                  <p>Night temperature: {surfaceTemperature.night}</p>
                )}
                {surfaceTemperature.summer && (
                  <p>Summer temperature: {surfaceTemperature.summer}</p>
                )}
                {surfaceTemperature.winter && (
                  <p>Winter temperature: {surfaceTemperature.winter}</p>
                )}
                {surfaceTemperature.range && (
                  <p>Temperature range: {surfaceTemperature.range}</p>
                )}
              </>
            )}
          </>
        )}
        <p>Weather/Climate: {onePlanet.weatherClimate}</p>
        <p>Travel Time: {onePlanet.travelTime}</p>
        <p>Curiosa: {onePlanet.curiosa}</p>
      </PlanetPage>
      <PlanetNavigation />
    </div>
  );
};
