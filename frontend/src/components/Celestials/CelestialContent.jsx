import { NavLink } from "react-router-dom"
import styled from "styled-components"
import sunImg from "../../assets/images/sun.png"
import moonImg from "../../assets/images/moon.png"
import { PlanetNavigation } from "../Planets/PlanetNavigation"
import GlobalStyles from "../GlobalStyles"
import leftArrow from "../../assets/icons/leftarrow.png"

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
`

const LeftArrow = styled.img`
  width: 20px;
  margin-right: 8px;
`

const CelestialContainer = styled.div`
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CelestialPage = styled.div`
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
`

const CelestialHeadline = styled.h1`
  font-size: var(--font-size-h1-mob);
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`

const CelestialImg = styled.img`
  width: 300px;
  margin: 20px auto;
`

const CelestialDetails = styled.div`
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
`

const TextBox = styled.div`
  background-color: var(--textbox-background);
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 8px;

  img {
    margin-top: 8px;
  }
`

const celestialImages = {
  Sun: sunImg,
  Moon: moonImg,
}

export const CelestialContent = ({ oneBody }) => {
  const imgSrc = oneBody.name.toLowerCase() === "sun" ? sunImg : moonImg
  const surfaceTemperature = oneBody.surfaceTemperature
  const celestialImg = celestialImages[oneBody.name]

  const temperatureEntries = surfaceTemperature
    ? Object.entries(surfaceTemperature)
    : []

  return (
    <>
      <GlobalStyles />
      <CelestialContainer>
        <CelestialPage>
          <BackLink to="/planets">
            <LeftArrow src={leftArrow} alt="Left arrow Icon" />
            BACK
          </BackLink>
          <CelestialHeadline>
            THE {oneBody.name.toUpperCase()}
          </CelestialHeadline>
          <h2>{oneBody.nickname}</h2>
          <CelestialImg src={celestialImg} alt={oneBody.name} />
          <CelestialDetails>
            <TextBox>
              <h3>TRAVEL TIME</h3>
              <p>{oneBody.travelTime}</p>
            </TextBox>

            <TextBox>
              <h3>MATERIAL</h3>
              <p>{oneBody.material}</p>
            </TextBox>

            {surfaceTemperature && (
              <>
                {typeof surfaceTemperature === "string" ? (
                  <h3>SURFACE TEMPERATURE: {surfaceTemperature}</h3>
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
                    {surfaceTemperature.core && (
                      <TextBox>
                        <h3>CORE TEMPERATURE</h3>
                        <p>{surfaceTemperature.core}</p>
                      </TextBox>
                    )}
                    {surfaceTemperature.surface && (
                      <TextBox>
                        <h3>SURFACE TEMPERATURE</h3>
                        <p>{surfaceTemperature.surface}</p>
                      </TextBox>
                    )}
                  </>
                )}
              </>
            )}

            <TextBox>
              <h3>WEATHER/CLIMATE</h3>
              <p>{oneBody.weatherClimate}</p>
            </TextBox>

            <TextBox>
              <h3>CURIOSA</h3>
              <p>{oneBody.curiosa}</p>
            </TextBox>
          </CelestialDetails>
        </CelestialPage>
      </CelestialContainer>
      <PlanetNavigation />
    </>
  )
}
