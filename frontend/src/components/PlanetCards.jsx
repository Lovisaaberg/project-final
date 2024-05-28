import React from "react";
import { Link } from "react-router-dom"
import { Planet } from "./Planet";

// import planets from """

export const PlanetCards = () => {
  return (
  <div className="Planets">
    {PlanetCards.map((planet) => (
      <Link key={planet.name} to={`/planets/${planet.name}`}>
      <Planet name={planet.name} image{planet.image}/>
      </Link>
    ))}
  </div>
  )
};
