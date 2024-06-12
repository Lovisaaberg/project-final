import { useState, useEffect } from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import loadingAnimation from "../assets/animations/carouselLottie.json"

export const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}>
          <Player
            src={loadingAnimation}
            autoplay
            loop
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}
