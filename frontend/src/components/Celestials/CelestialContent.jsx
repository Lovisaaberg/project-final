import styled from "styled-components";
import sunImg from "../../assets/images/sun.png";
import moonImg from "../../assets/images/moon.png";

const SunAndMoonPage = styled.div`
    background: #000000;
    h1.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    }
    p.roboto-mono {
      font-family: "Roboto Mono";
    }
  }`;

const CelestialContent = ({ oneBody }) => {
  const imgSrc = oneBody.name.toLowerCase() === "sun" ? sunImg : moonImg;

  return (
    <div>
      <SunAndMoonPage>
        <h1 className="space-mono-bold">The {oneBody.name}</h1>
        <img src={imgSrc} alt={oneBody.name} />
        <p className="roboto-mono">Nickname: {oneBody.nickname}</p>
        <p className="roboto-mono">Material: {oneBody.material}</p>
        <p className="roboto-mono">
          Surface Temperature: {oneBody.surfaceTemperature}
        </p>
        <p className="roboto-mono">Weather Climate: {oneBody.weatherClimate}</p>
        <p className="roboto-mono">Travel time: {oneBody.travelTime}</p>
        <p className="roboto-mono">Curiosa: {oneBody.curiosa}</p>
      </SunAndMoonPage>
    </div>
  );
};

export default CelestialContent;
