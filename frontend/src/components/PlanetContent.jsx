import styled from "styled-components";

const PlanetPage = styled.div`
    background: #000000;
    h1.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    }
    p.roboto-mono {
      font-family: "Roboto Mono";
    }
  }`;

export const PlanetContent = ({ onePlanet }) => {
  const surfaceTemperature = onePlanet.surfaceTemperature;

  const temperatureEntries = surfaceTemperature
    ? Object.entries(surfaceTemperature)
    : [];

  return (
    <div>
      <PlanetPage>
        <h1 className="space-mono-bold">{onePlanet.name}</h1>
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
