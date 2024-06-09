import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlanetContent } from "./PlanetContent";

export const Planet = () => {
  const { planet } = useParams();
  const [onePlanet, setOnePlanet] = useState(null);
  const [loading, setLoading] = useState(true);
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
      } catch (error) {
        setError(error);
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
    return <p>{error.message}</p>;
  }

  return (
    <>
      <PlanetContent onePlanet={onePlanet} />
    </>
  );
};
