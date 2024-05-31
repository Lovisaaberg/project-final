import { Planet } from "./Planet"
import { useState, useEffect } from "react"

export const PlanetCards = ({ name }) => {
  const URL = `https://project-final-45vw.onrender.com/planets/${{name}}`
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlanet = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch planet ${name}, reload page and try again`
          )
        }
        const data = await response.json()
        setPlanet(data)
        console.log(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlanet()
  }, [URL, name])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!planet) {
    return <div>No planet data available</div>
  }

  return (
    <div className="planet-card">
      <Planet name={planet.name} image={planet.image} />
    </div>
  )
}

// //import { Link } from "react-router-dom";
// //import { Planet } from "./Planet";
// import { useState, useEffect } from "react";
// // import planets from """

// export const PlanetCards = () => {
//   const URL = "https://project-final-45vw.onrender.com/planets";
//   //import.meta.env.API_KEY_PLANETS;
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     const fetchPlanets = () => {
//       fetch(URL)
//         .then((response) => {
//           return response.json();
//         })
//         .then((json) => {
//           setPlanets(json);
//           console.log(json);
//         })
//         .catch((error) => {
//           // console.log(error);
//         });
//       // console.log(URL);
//     };

//     fetchPlanets();
//   }, [URL]);

//   return <></>;
// };

// {
//   /* <div className="Planets">
// {PlanetCards.map((planet) => (
//   <Link key={planet.name} to={`/planets/${planet.name}`}>
//     <Planet name={planet.name} />
//   </Link>
// ))}
// </div> */
// }
