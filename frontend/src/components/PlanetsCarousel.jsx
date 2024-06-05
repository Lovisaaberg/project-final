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
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {planets.map((planets, index) => (
          <Slide key={index}>
            <PlanetImage src={planets.image} alt={planets.name} />
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
`;

const PlanetImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
`;

const PlanetName = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;
