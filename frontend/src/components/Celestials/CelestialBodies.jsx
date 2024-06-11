import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { CelestialContent } from "./CelestialContent"

export const CelestialBodies = () => {
  const { name } = useParams()
  const [oneBody, setOneBody] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const URL = `https://project-final-45vw.onrender.com/celestial/${name}`

  useEffect(() => {
    const fetchOneBody = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch any celestial body, reload page and try again.`
          )
        }
        const data = await response.json()
        setOneBody(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchOneBody()
  }, [name])

  if (loading) {
    return <p>Loading celestial body...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <CelestialContent oneBody={oneBody} />
    </div>
  )
}
