import { NavLink } from "react-router-dom";
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
import GlobalStyles from "../GlobalStyles";
import Rocket from "../../assets/icons/travelTimeRocket.png";
import leftarrow from "../../assets/icons/leftarrow.png";
import { PlanetNavigation } from "./PlanetNavigation";

const BackLink = styled(NavLink)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: var(--text-color-primary);
  text-decoration: none;
  cursor: pointer;
  font-family: var(--font-family-headlines);
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const LeftArrow = styled.img`
  width: 20px;
  margin-right: 8px;
`;

const PlanetContainer = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlanetPage = styled.div`
  font-family: var(--font-family-headlines);
  font-size: var(--font-size-text-mob);
  color: var(--headline-color);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: var(--font-size-h2-mob);
    font-family: var(--font-family-text);
    font-weight: 300;
    text-align: center;
    margin-top: 0px;
  }
`;

const PlanetHeadline = styled.h1`
  font-size: var(--font-size-h1-mob);
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`;

const PlanetImg = styled.img`
  width: 300px;
  margin: 20px auto;
`;

const PlanetDetails = styled.div`
  font-family: var(--font-family-text);
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-family-headlines);
    font-size: var(--font-size-h3-mob);
    font-weight: 600;
    margin: 0;

    @media (min-width: 768px) {
      font-size: var(--font-size-h3-desktop);
    }
  }

  p {
    font-family: var(--font-family-text);
    font-size: var(--font-size-text-mob);
    font-weight: 100;
    margin: 4px 0 0 0;

    @media (min-width: 768px) {
      font-size: var(--font-size-large);
    }
  }
`;

const TextBox = styled.div`
  background-color: var(--textbox-background);
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 8px;

  img {
    margin-top: 8px;
  }
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
    <>
      <GlobalStyles />
      <PlanetContainer>
        <PlanetPage>
          <BackLink to="/planets">
            <LeftArrow src={leftarrow} alt="Left Arrow Icon" />
            BACK
          </BackLink>
          <PlanetHeadline>{onePlanet.name.toUpperCase()}</PlanetHeadline>
          <h2>{onePlanet.nickname}</h2>
          <PlanetImg src={planetImg} alt={onePlanet.name} />
          <PlanetDetails>
            <TextBox>
              <h3>TRAVEL TIME</h3>
              <p>{onePlanet.travelTime}</p>
              <img src={Rocket} alt="Icon of planet & rocket" />
            </TextBox>

            <TextBox>
              <h3>MOONS</h3>
              <p>{onePlanet.moons}</p>
            </TextBox>

            <TextBox>
              <h3>ASTEROIDS</h3>
              <p>{onePlanet.asteroids}</p>
            </TextBox>

            <TextBox>
              <h3>MATERIAL</h3>
              <p>{onePlanet.material}</p>
            </TextBox>

            {surfaceTemperature && (
              <>
                {typeof surfaceTemperature === "string" ? (
                  <TextBox>
                    <h3>SURFACE TEMPERATURE</h3>
                    <p>{surfaceTemperature}</p>
                  </TextBox>
                ) : (
                  <>
                    {surfaceTemperature.day && (
                      <TextBox>
                        <h3>DAY TEMPERATURE</h3>
                        <p>{surfaceTemperature.day}</p>
                      </TextBox>
                    )}

                    {surfaceTemperature.night && (
                      <TextBox>
                        <h3>NIGHT TEMPERATURE</h3>
                        <p>{surfaceTemperature.night}</p>
                      </TextBox>
                    )}
                    {surfaceTemperature.summer && (
                      <TextBox>
                        <h3>SUMMER TEMPERATURE</h3>
                        <p>{surfaceTemperature.summer}</p>
                      </TextBox>
                    )}
                    {surfaceTemperature.winter && (
                      <TextBox>
                        <h3>WINTER TEMPERATURE</h3>
                        <p>{surfaceTemperature.winter}</p>
                      </TextBox>
                    )}
                    {surfaceTemperature.range && (
                      <TextBox>
                        <h3>TEMPERATURE RANGE</h3>
                        <p>{surfaceTemperature.range}</p>
                      </TextBox>
                    )}
                  </>
                )}
              </>
            )}
            <TextBox>
              <h3>WEATHER/CLIMATE</h3>
              <p>{onePlanet.weatherClimate}</p>
            </TextBox>

            <TextBox>
              <h3>CURIOSA</h3>
              <p>{onePlanet.curiosa}</p>
            </TextBox>
          </PlanetDetails>
        </PlanetPage>
      </PlanetContainer>
      <PlanetNavigation />
    </>
  );
};
