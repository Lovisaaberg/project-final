import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AllPlanets = () => {
  const URL = `https://project-final-45vw.onrender.com/planets`;
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch planets, reload page and try again`);
        }
        const data = await response.json();
        setPlanets(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(true);
      }

      if (loading) {
        return <div>Loading all planets...</div>;
      }

      if (error) {
        return <div>Error: {error}</div>;
      }

      if (!planets) {
        return <div>No planet data available</div>;
      }
    };
    fetchPlanets();
  }, []);

  return (
    <div>
      <div>This is the homepage</div>
      {planets.map((planet) => (
        <div key={planet.id}>
          <Link to={`planets/${planet.id}`}></Link>
          <div>
            <h1>{planet.id}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
