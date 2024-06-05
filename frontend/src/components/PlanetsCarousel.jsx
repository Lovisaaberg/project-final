import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mercuryImg from "../assets/images/mercury.png";
import venusImg from "../assets/images/venus.png";
import tellusImg from "../assets/images/tellus.png";
import marsImg from "../assets/images/mars.png";
import jupiterImg from "../assets/images/jupiter.png";
import saturnImg from "../assets/images/saturn.png";
import uranusImg from "../assets/images/uranus.png";
import neptuneImg from "../assets/images/neptune.png";
import plutoImg from "../assets/images/pluto.png";
import { Link } from "react-router-dom";

//Från PlanetsCarousel ska man hamna på planets/:name,
//`/planets/${planet.name}` när man klickar på en planet
//Länken ska vara inbakad i respektive PlanetImage

const planets = [
  { name: "Mercury", image: mercuryImg },
  { name: "Venus", image: venusImg },
  { name: "Earth", image: tellusImg },
  { name: "Mars", image: marsImg },
  { name: "Jupiter", image: jupiterImg },
  { name: "Saturn", image: saturnImg },
  { name: "Uranus", image: uranusImg },
  { name: "Neptune", image: neptuneImg },
  { name: "Pluto", image: plutoImg },
];

export const PlanetsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {planets.map((planets, index) => (
          <Slide key={index} isCenter={index === currentSlide}>
            <Link to={`/planets/${planets.name.toLowerCase()}`}>
              <PlanetImage
                src={planets.image}
                alt={planets.name}
                isCenter={index === currentSlide}
              />
            </Link>
            <PlanetName>{planets.name}</PlanetName>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Slide = styled.div`
  text-align: center;
  padding: 10px;
  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ isCenter }) => (isCenter ? "scale(1.0)" : "scale(0.7)")};
  opacity: ${({ isCenter }) => (isCenter ? "1" : "0.5")};
  margin: ${({ isCenter }) => (isCenter ? "0 -40px" : "0")};
`;

const PlanetImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
  transition: transform 0.5s;
  transform: ${({ isCenter }) => (isCenter ? "scale(1.0)" : "scale(0.9)")};
`;

const PlanetName = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;
