import React from "react";
import { useParam } from "react-router-dom"
import planets from "data json"
import { Planet } from "./Planet";

export const ShowPlanet = () => {
    const params = useParam()
    const planetMatch = planets.find((planet)=> planet.name === params.name)
    return (
        <div className="orderPage">
        <Planet name={(planetMatch.name)} image ={planetMatch.image}/>
        </div>
    )
}