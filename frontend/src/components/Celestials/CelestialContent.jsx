import styled from "styled-components";
import sunImg from "../../assets/images/sun.png";
import moonImg from "../../assets/images/moon.png";

const SunAndMoonPage = styled.div`
  h1 {
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
`;

const CelestialContent = ({ oneBody }) => {
  const imgSrc = oneBody.name.toLowerCase() === "sun" ? sunImg : moonImg;
  const surfaceTemperature = oneBody.surfaceTemperature;

  const temperatureEntries = surfaceTemperature
    ? Object.entries(surfaceTemperature)
    : [];

  return (
    <div>
      <SunAndMoonPage>
        <h1>The {oneBody.name}</h1>
        <img src={imgSrc} alt={oneBody.name} />
        <p>Nickname: {oneBody.nickname}</p>
        <p>Material: {oneBody.material}</p>
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
                {surfaceTemperature.core && (
                  <p>Core temperature: {surfaceTemperature.core}</p>
                )}
                {surfaceTemperature.surface && (
                  <p>Surface temperature: {surfaceTemperature.surface}</p>
                )}
              </>
            )}
          </>
        )}
        <p>Weather Climate: {oneBody.weatherClimate}</p>
        <p>Travel time: {oneBody.travelTime}</p>
        <p>Curiosa: {oneBody.curiosa}</p>
      </SunAndMoonPage>
    </div>
  );
};

export default CelestialContent;
