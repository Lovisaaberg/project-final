import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AllPlanets = () => {
  const URL = `https://project-final-45vw.onrender.com/planets`;
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch planets, reload page and try again`);
        }
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  if (loading) {
    return <div>Loading all planets...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (planets.length === 0) {
    return <div>No planet data available</div>;
  }

  return (
    <div>
      <div>This is the AllPlanets page, route "/"</div>
      {planets.map((planet) => (
        <div key={planet._id}>
          <Link to={`planets/${planet.name}`}>
            <div>
              <h2>{planet.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
