import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export const CelestialBody = () => {
  const { CelestialBody } = useParams();
  const [oneBody, setOneBody] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = `https://project-final-45vw.onrender.com/celestial/${name}`;

  useEffect(() => {
    const fetchOneBody = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch any celestial body, reload page and try again.`
          );
        }
        const data = await response.json();
        setOneBody(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOneBody();
  }, [oneBody]);

  if (loading) {
    return <p>Loading celestial body...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        <Link to="/">
          <p>Back to spaceport</p>
        </Link>
      </div>

    </div>
  );
};