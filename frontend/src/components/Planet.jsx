import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PlanetDetails } from "./PlanetDetails";

export const Planet = () => {
  const { planet } = useParams();
  const [onePlanet, setOnePlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = `https://project-final-45vw.onrender.com/planets/${planet}`;
  //const temperature = Object.entries(onePlanet.surfaceTemperature);

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
    return <p>Loading planet...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        <Link className="goHome" to="/">
          <p>Back to spaceport</p>
        </Link>
      </div>
      <PlanetDetails onePlanet={onePlanet} />
    </div>
  );
};
