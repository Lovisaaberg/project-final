import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { PlanetNavigation } from "../Planets/PlanetNavigation"
import sunImg from "../../assets/images/sun.png"
import moonImg from "../../assets/images/moon.png"
import leftArrow from "../../assets/icons/leftarrow.png"

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
    color: #cf4b14;
    font-weight: 300;
    text-align: center;
    margin-top: 0px;
  }
`

const CelestialHeadline = styled.h1`
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

 const CelestialImgMob = styled.img`
   width: 100%;
   max-width: 400px;
   margin: 20px auto;

   @media (min-width: 830px) {
     display: none;
   }
`

const CelestialImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;

  margin-right: 20px;

  @media (max-width: 830px) {
    display: none;
  }
`

const CelestialDetails = styled.div`
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
          <CelestialImgMob src={celestialImg} alt={oneBody.name} />
          <CelestialDetails>
            <TextBoxContainer>
              <LeftColumn>
                <TextBox>
                  <h3>TRAVEL TIME</h3>
                  <p>{oneBody.travelTime}</p>
                </TextBox>

                <TextBox>
                  <h3>MATERIAL</h3>
                  <p>{oneBody.material}</p>
                </TextBox>
              </LeftColumn>

              <ImageContainer>
                <CelestialImg src={celestialImg} alt={oneBody.name} />
              </ImageContainer>

              <RightColumn>
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
              </RightColumn>
              <CuriosaContainer>
              <CuriosaTextBox>
                <h3>CURIOSA</h3>
                <p>{oneBody.curiosa}</p>
              </CuriosaTextBox>
              </CuriosaContainer>
            </TextBoxContainer>
          </CelestialDetails>
        </CelestialPage>
      </CelestialContainer>
      <PlanetNavigation />
    </>
  )
}
