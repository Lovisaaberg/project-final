import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"
import mercuryImg from "../../assets/images/mercury.png"
import venusImg from "../../assets/images/venus.png"
import tellusImg from "../../assets/images/tellus.png"
import marsImg from "../../assets/images/mars.png"
import jupiterImg from "../../assets/images/jupiter.png"
import saturnImg from "../../assets/images/saturn.png"
import uranusImg from "../../assets/images/uranus.png"
import neptuneImg from "../../assets/images/neptune.png"
import plutoImg from "../../assets/images/pluto.png"
import sunImg from "../../assets/images/sun.png"
import moonImg from "../../assets/images/moon.png"

const PlanetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 50px);
  grid-column-gap: 20px;
  justify-content: end;
  align-items: center;
  width: 1000px;
`

const PlanetLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: inherit;
`

const PlanetCard = styled.div`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`

const PlanetImage = styled.img`
  width: 50px;
`

export const AllPlanets = () => {
  const URL = `https://project-final-45vw.onrender.com/planets`
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch planets, reload page and try again`)
        }
        const data = await response.json()
        setPlanets(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPlanets()
  }, [])

  if (loading) {
    return <div>Loading all planets...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (planets.length === 0) {
    return <div>No planet data available</div>
  }

  // Function to get the image source based on the planet name
  const getImageSrc = (planetName) => {
    switch (planetName.toLowerCase()) {
      case "sun":
        return sunImg
      case "mercury":
        return mercuryImg
      case "venus":
        return venusImg
      case "tellus":
        return tellusImg
      case "mars":
        return marsImg
      case "jupiter":
        return jupiterImg
      case "saturn":
        return saturnImg
      case "uranus":
        return uranusImg
      case "neptune":
        return neptuneImg
      case "pluto":
        return plutoImg
      case "moon":
        return moonImg
      default:
        return ""
    }
  }

  // Array to define the order of planets based on the switch statement
  const planetOrder = [
    "sun",
    "mercury",
    "venus",
    "tellus",
    "moon",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
  ]

  // Sort planets based on the planetOrder array
  const sortedPlanets = planets.sort(
    (a, b) =>
      planetOrder.indexOf(a.name.toLowerCase()) -
      planetOrder.indexOf(b.name.toLowerCase())
  )
  return (
    <PlanetsContainer>
      {sortedPlanets.map((planet) => (
        <PlanetLink
          key={planet.name}
          to={
            planet.name === "sun" || planet.name === "moon"
              ? `/${planet.name}`
              : `/planets/${planet.name.toLowerCase()}`
          }
        >
          <PlanetCard>
            <PlanetImage src={getImageSrc(planet.name)} alt={planet.name} />
          </PlanetCard>
        </PlanetLink>
      ))}
    </PlanetsContainer>
  )
}
