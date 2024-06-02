export const PlanetDetails = ({ onePlanet }) => {
  const surfaceTemperature = onePlanet.surfaceTemperature;

  const temperatureEntries = surfaceTemperature
    ? Object.entries(surfaceTemperature)
    : [];

  return (
    <div>
      <div>
        <h1>{onePlanet.name}</h1>
        <p>Nickname: {onePlanet.nickname}</p>
        <p>Moons: {onePlanet.moons}</p>
        <p>Asteroids: {onePlanet.asteroids}</p>
        <p>Material: {onePlanet.material}</p>
        {surfaceTemperature && (
          <div>
            Surface Temperature:
            {typeof surfaceTemperature === "string" ? (
              // If surfaceTemperature is a string, display it directly:
              <div>{surfaceTemperature}</div>
            ) : (
              // If surfaceTemperature is an object, display temperatures accordingly:
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
          </div>
        )}
        <p>Weather/Climate: {onePlanet.weatherClimate}</p>
        <p>Travel Time: {onePlanet.travelTime}</p>
        <p>Curiosa: {onePlanet.curiosa}</p>
      </div>
    </div>
  );
};
