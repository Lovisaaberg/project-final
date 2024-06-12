import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { PlanetNavigation } from "./PlanetNavigation"
import mercuryImg from "../../assets/images/mercury.png"
import venusImg from "../../assets/images/venus.png"
import tellusImg from "../../assets/images/tellus.png"
import marsImg from "../../assets/images/mars.png"
import jupiterImg from "../../assets/images/jupiter.png"
import saturnImg from "../../assets/images/saturn.png"
import uranusImg from "../../assets/images/uranus.png"
import neptuneImg from "../../assets/images/neptune.png"
import plutoImg from "../../assets/images/pluto.png"
import leftarrow from "../../assets/icons/leftarrow.png"

const BackLink = styled(NavLink)`
  position: absolute;
  top: 80px;
  left: 8px;
  color: var(--text-color-primary);
  text-decoration: none;
  cursor: pointer;
  font-family: var(--font-family-headlines);
  font-size: 16px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

const LeftArrow = styled.img`
  width: 20px;
  margin-right: 8px;
`

const PlanetContainer = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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
    color: #cf4b14;
    font-weight: 300;
    text-align: center;
    margin-top: 0px;
  }
`

const PlanetHeadline = styled.h1`
  font-size: var(--font-size-h1-mob);
  text-align: center;
  margin-bottom: 8px;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  grid-column: 1 / 3;

  @media (min-width: 830px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-bottom: 0;
  }
`

const PlanetImgMob = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;

  @media (min-width: 830px) {
    display: none;
  }
`

const PlanetImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;

  margin-right: 20px;

  @media (max-width: 830px) {
    display: none;
  }
`

const PlanetDetails = styled.div`
  font-family: var(--font-family-text);
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
  }

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
`

const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    display: contents;
    justify-content: space-between;
  }
`

const TextBox = styled.div`
  background-color: var(--textbox-background);
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  width: 100%;
  width: 280px;
`

const CuriosaContainer = styled.div`
  grid-column: 1 / -1;
`

const CuriosaTextBox = styled.div`
  background-color: var(--textbox-background);
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 40px;
  width: 280px;

  @media (min-width: 768px) {
    width: auto;
    max-width: 1100px;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1;
    align-items: flex-start;
  }
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1;
    align-items: flex-end;
    margin-left: 20px;
  }
`

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
}

export const PlanetContent = ({ onePlanet }) => {
  const surfaceTemperature = onePlanet.surfaceTemperature
  const planetImg = planetImages[onePlanet.name]

  return (
    <>
      <PlanetContainer>
        <PlanetPage>
          <BackLink to="/planets">
            <LeftArrow src={leftarrow} alt="Left Arrow Icon" />
            BACK
          </BackLink>
          <PlanetHeadline>{onePlanet.name.toUpperCase()}</PlanetHeadline>
          <h2>{onePlanet.nickname}</h2>
          <PlanetImgMob src={planetImg} alt={onePlanet.name} />
          <PlanetDetails>
            <TextBoxContainer>
              <LeftColumn>
                <TextBox>
                  <h3>TRAVEL TIME</h3>
                  <p>{onePlanet.travelTime}</p>
                </TextBox>

                <TextBox>
                  <h3>MOONS</h3>
                  <p>{onePlanet.moons}</p>
                </TextBox>

                <TextBox>
                  <h3>ASTEROIDS</h3>
                  <p>{onePlanet.asteroids}</p>
                </TextBox>
              </LeftColumn>

              <ImageContainer>
                <PlanetImg src={planetImg} alt={onePlanet.name} />
              </ImageContainer>

              <RightColumn>
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
              </RightColumn>
              <CuriosaContainer>
                <CuriosaTextBox>
                  <h3>CURIOSA</h3>
                  <p>{onePlanet.curiosa}</p>
                </CuriosaTextBox>
              </CuriosaContainer>
            </TextBoxContainer>
          </PlanetDetails>
        </PlanetPage>
      </PlanetContainer>
      <PlanetNavigation />
    </>
  )
}
