import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Från PlanetsCarousel ska man hamna på planets/:name,
//`/planets/${planet.name}` när man klickar på en planet
//Länken ska vara inbakad i respektive PlanetImage

const planets = [
  { name: "Mercury" },
  { name: "Venus" },
  { name: "Earth" },
  { name: "Mars" },
  { name: "Jupiter" },
  { name: "Saturn" },
  { name: "Uranus" },
  { name: "Neptune" },
  { name: "Pluto" },
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
        {planets.map((planet, index) => (
          <Slide key={index}>
            <PlanetImage src={planet.image} alt={planet.name} />
            <PlanetName>{planet.name}</PlanetName>
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
