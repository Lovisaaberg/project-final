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

const PlanetPage = styled.div`
    background: #000000;
    h1.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    }
    p.roboto-mono {
      font-family: "Roboto Mono";
    }
  }
  `;

const PlanetImg = styled.img`
  height: 300px;
  width: 300px;
`;

const planetImages = {
  mercury: mercuryImg,
  venus: venusImg,
  tellus: tellusImg,
  mars: marsImg,
  jupiter: jupiterImg,
  saturn: saturnImg,
  uranus: uranusImg,
  neptune: neptuneImg,
  pluto: plutoImg,
};

export const PlanetContent = ({ onePlanet }) => {
  const surfaceTemperature = onePlanet.surfaceTemperature;

  const temperatureEntries = surfaceTemperature
    ? Object.entries(surfaceTemperature)
    : [];

  const planetImg = planetImages[onePlanet.name.toLowerCase()];

  return (
    <div>
      <PlanetPage>
        <h1 className="space-mono-bold">{onePlanet.name.toUpperCase()}</h1>
        <PlanetImg src={planetImg} alt={onePlanet.name} />
        <p className="roboto-mono">Nickname: {onePlanet.nickname}</p>
        <p className="roboto-mono">Moons: {onePlanet.moons}</p>
        <p className="roboto-mono">Asteroids: {onePlanet.asteroids}</p>
        <p className="roboto-mono">Material: {onePlanet.material}</p>
        {surfaceTemperature && (
          <p className="roboto-mono">
            Surface Temperature:
            {typeof surfaceTemperature === "string" ? (
              <div>{surfaceTemperature}</div>
            ) : (
              <div>
                {surfaceTemperature.day && (
                  <div>Day: {surfaceTemperature.day}</div>
                )}
                {surfaceTemperature.night && (
                  <div>Night: {surfaceTemperature.night}</div>
                )}
                {surfaceTemperature.summer && (
                  <div>Summer: {surfaceTemperature.summer}</div>
                )}
                {surfaceTemperature.winter && (
                  <div>Winter: {surfaceTemperature.winter}</div>
                )}
                {surfaceTemperature.range && (
                  <div>Range: {surfaceTemperature.range}</div>
                )}
              </div>
            )}
          </p>
        )}
        <p className="roboto-mono">
          Weather/Climate: {onePlanet.weatherClimate}
        </p>
        <p className="roboto-mono">Travel Time: {onePlanet.travelTime}</p>
        <p className="roboto-mono">Curiosa: {onePlanet.curiosa}</p>
      </PlanetPage>
    </div>
  );
};
