//Fetches all celestial bodies from the API

import { useState, useEffect } from "react"
import { NavLinks } from "../Navigation/NavLinks"

export const AllCelestials = () => {
  const URL = `https://project-final-45vw.onrender.com/celestial/`
  const [celestials, setCelestials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCelestials = async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch celestial bodies, reload page and try again`
          )
        }
        const data = await response.json()
        setCelestials(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCelestials()
  }, [])

  if (loading) {
    return <div>Loading celestial data....</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (celestials.length === 0) {
    return <div>No celestial data available at this time</div>
  }

  return (
    <div>
      {celestials.map((celestial) => (
        <div key={celestial._id}>
          <NavLinks label={celestial.name} to={`/celestial/${name}`} />
        </div>
      ))}
    </div>
  )
}
