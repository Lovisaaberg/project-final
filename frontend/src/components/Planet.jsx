import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Planet = () => {
  const { planet } = useParams();
  const [onePlanet, setOnePlanet] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL = `https://project-final-45vw.onrender.com/planets/${planet}`;

  useEffect(() => {
    const fetchOnePlanet = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch the requested planet, reload page and try again`
          );
        }
        const data = await response.json();
        setOnePlanet(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOnePlanet();
  }, [planet]);

  if (loading) {
    return <p>Loading one planet...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        <Link className="goHome" to="/">
          <p>Add here: Go to home page link</p>
        </Link>
      </div>
      <div>
        <h1>{onePlanet.name}</h1>
        <p>{onePlanet.nickname}</p>
        <p>{onePlanet.moons}</p>
        <p>{onePlanet.asteroids}</p>
        <p>{onePlanet.material}</p>
        <p>{onePlanet.surfaceTemperature}</p>

        <p>{onePlanet.weatherClimate}</p>
        <p>{onePlanet.travelTime}</p>
        <p>{onePlanet.curiosa}</p>
      </div>
    </div>
  );
};
{
  /* <p>Day Temperature: {onePlanet.surfaceTemperature.day}</p>
<p>Night Temperature: {onePlanet.surfaceTemperature.night}</p> */
}
