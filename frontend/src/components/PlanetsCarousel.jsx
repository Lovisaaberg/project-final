import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sunImg from "../assets/images/sun.png";
import mercuryImg from "../assets/images/mercury.png";
import venusImg from "../assets/images/venus.png";
import tellusImg from "../assets/images/tellus.png";
import moonImg from "../assets/images/moon.png";
import marsImg from "../assets/images/mars.png";
import jupiterImg from "../assets/images/jupiter.png";
import saturnImg from "../assets/images/saturn.png";
import uranusImg from "../assets/images/uranus.png";
import neptuneImg from "../assets/images/neptune.png";
import plutoImg from "../assets/images/pluto.png";
import nextArrowIcon from "../assets/icons/rightarrow.png";
import prevArrowIcon from "../assets/icons/leftarrow.png";

const planets = [
  { name: "sun", image: sunImg },
  { name: "mercury", image: mercuryImg },
  { name: "venus", image: venusImg },
  { name: "tellus", image: tellusImg },
  { name: "moon", image: moonImg },
  { name: "mars", image: marsImg },
  { name: "jupiter", image: jupiterImg },
  { name: "saturn", image: saturnImg },
  { name: "uranus", image: uranusImg },
  { name: "neptune", image: neptuneImg },
  { name: "pluto", image: plutoImg },
];

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`;

const Slide = styled.div`
  text-align: center;
  transition: transform 0.5s, opacity 0.5s;
  transform: ${({ isCenter }) => (isCenter ? "scale(1.0)" : "scale(0.7)")};
  opacity: ${({ isCenter }) => (isCenter ? "1" : "0.5")};
`;

const PlanetImage = styled.img`
  width: ${(props) => (props.saturnimg ? "280px" : "100%")};
  height: ${(props) => (props.saturnimg ? "135px" : "100%")};
  margin: ${(props) => (props.saturnimg ? "0px -10px -20px -30px" : "0 auto")};
  transition: transform 0.5s;
  transform: ${({ isCenter }) => (isCenter ? "scale(1.0)" : "scale(0.9)")};

  @media (min-width: 768px) {
    max-width: 280px;
  }
`;

const PlanetName = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;
  width: 50px;
  height: 50px;
  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
  img {
    width: 100%;
    height: 100%;
  }
`;

export const PlanetsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = ({ onClick }) => (
    <Arrow direction="left" onClick={onClick}>
      <img src={prevArrowIcon} alt="Previous" />
    </Arrow>
  );

  const CustomNextArrow = ({ onClick }) => (
    <Arrow direction="right" onClick={onClick}>
      <img src={nextArrowIcon} alt="Next" />
    </Arrow>
  );

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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {planets.map((planet, index) => (
          <Slide key={index} isCenter={index === currentSlide}>
            <Link to={planet.name === "sun" || planet.name === "moon" ? `/${planet.name}` : `/planets/${planet.name}`}>
              <PlanetImage
                src={planet.image}
                alt={planet.name}
                isCenter={index === currentSlide}
                saturnimg={planet.name === "saturn"}
              />
            </Link>
            <PlanetName>{planet.name}</PlanetName>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};
