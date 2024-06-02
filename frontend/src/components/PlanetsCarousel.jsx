// import styled from "styled-components";
// import { useCarousel } from "../contexts/PlanetsCarouselContext.jsx";

// export const PlanetsCarousel = () => {
//   const { planetsNumber, planets, navigation } = useCarousel();

//   const translateValue = -planetsNumber * 100;

//   return (
//     <CarouselContainer {...navigation} className="carousel">
//       {planets.map(({ planetImage, id }) => (
//         <Slide key={id} translateValue={translateValue}>
//           <CarouselPlanets>
//             <Image
//               src={planetImage}
//               alt="image with planets in our solar system"
//             />
//           </CarouselPlanets>
//         </Slide>
//       ))}
//     </CarouselContainer>
//   );
// };

// const CarouselContainer = styled.div`
// display: flex;
//   flex-direction; row;
//   overflow: hidden;
//   width: 100%;
//   `;

//   const Slide = styled.div`
//   flex: 0 0 100%;
//   transition: transform 0.5s ease;
//   transform: translateX(${(props) => props.translateValue}%);
//   `;
//   const CarouselPlanets = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-left: 16px;
//   margin-right: 16px;
//   gap: 16px;
// `;
// const Image = styled.img``;