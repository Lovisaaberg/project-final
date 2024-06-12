import { PlanetsCarousel } from "./PlanetsCarousel"
import { SpaceFeed } from "./SpaceFeed"
import earthImg from "./../assets/images/earthImg.jpg"
import styled from "styled-components"
import footerImg from "./../assets/images/footerImg.png"
import { Loading } from "./Loading"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Headline = styled.h1`
  font-size: var(--font-size-h1-mob);
  font-family: var(--font-family-headlines);
  color: var(--headline-color);
  margin: 20px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
    max-width: 1100px;
  }
`

const IntroText = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-secondary);
  display: flex;
  text-align: center;
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
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;

  @media (min-width: 768px) {
    z-index: 3;
  }
`

const MoonImage = styled.img`
  width: 100%;
  margin-top: 100px;
  z-index: 1;

  @media (min-width: 768px) {
    z-index: 2;
  }
`

export const LandingPage = () => {
  return (
    <>
      <Loading>
        <PageContainer>
          <Headline>THE S0LAR SYSTEM TRAVEL GUIDE</Headline>
          <IntroText>
            Explore the wonders of our solar system, learn fascinating facts
            about the planets and celestial bodies, and join the conversation in
            our Celestial Feed.
          </IntroText>
          <PlanetsCarousel />
          <ImageContainer>
            <Image src={earthImg} alt="Image of earth from space" />
            <Overlay>
              <SpaceFeed />
              <MoonImage src={footerImg} alt="Picture of Moon" />
            </Overlay>
          </ImageContainer>
        </PageContainer>
      </Loading>
    </>
  )
}
