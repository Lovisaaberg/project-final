import { PlanetsCarousel } from "./PlanetsCarousel"
import { SpaceFeed } from "./SpaceFeed"
import earthImg from "./../assets/images/earthImg.jpg"
import styled from "styled-components"
import halfMoon from "./../assets/images/moonFooter.png"

const Headline = styled.h1`
  font-size: var(--font-size-h1-mob);
  font-family: var(--font-family-headlines);
  color: var(--headline-color);
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 30px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`

const IntroText = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-secondary);
  text-align: center;
  justify-content: center;
  max-width: 750px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: var(--font-size-medium);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const Image = styled.img`
  width: 100%;

  object-fit: cover;
`
const Overlay = styled.div`
  position: absolute;
  top: 800px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MoonImage = styled.img`
  width: 100%;
  margin-top: 60px;
`

export const LandingPage = () => {
  return (
    <>
      <div>
        <Headline>THE S0LAR SYSTEM TRAVEL GUIDE</Headline>
        <IntroText>
          Explore the wonders of our solar system, learn fascinating facts about
          the planets and celestial bodies, and join the conversation in our
          Celestial Feed.
        </IntroText>
        <PlanetsCarousel />
        <ImageContainer>
          <Image src={earthImg} alt="Image of earth from space" />
          <Overlay>
            <SpaceFeed />
            <MoonImage src={halfMoon} alt="Picture of Moon" />
          </Overlay>
        </ImageContainer>
      </div>
    </>
  )
}
