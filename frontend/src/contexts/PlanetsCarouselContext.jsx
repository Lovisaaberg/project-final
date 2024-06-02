import { createContext, useContext, useState } from "react";
import { useSwipeable } from "react-swipwable";
import { planet1image } from "./images/planet1.jpg";

const PlanetsCarouselContext = createContext();

export const PlanetsCarouselProvider = ({ children }) => {
  const [planetNumber, setPlanetNumber] = useState(0);

  const planets = [
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
    {
      planetImage: planet1image,
    },
  ];
  const navigation = useSwipeable({
    onSwipedRight: () => {
      setPlanetNumber((prevNumber) =>
        prevNumber === 0 ? planets.lenght - 1 : prevNumber - 1
      );
    },
    onSwipedLeft: () => {
      setPlanetNumber((prevNumber) =>
        prevNumber === planets.length - 1 ? 0 : prevNumber + 1
      );
    },
    preventDefaultTouchmoveEvent: true,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const changeNumber = (newNumber) => {
    setPlanetNumber(newNumber);
  };
  return (
    <PlanetsCarouselContext.Provider
      value={{
        planetNumber,
        planets,
        navigation,
        changeNumber,
      }}
    >
      {children}
    </PlanetsCarouselContext.Provider>
  );
};

export const useCarousel = () => useContext(PlanetsCarouselContext);
