import { useState, useEffect } from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import loadingAnimation from "../assets/animations/carouselLottie.json"

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Player
        src={loadingAnimation}
        autoplay
        loop
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  )
}

// return (
//     <>
//       {isLoading ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           <Player
//             src={loadingAnimation}
//             autoplay
//             loop
//             style={{ height: "300px", width: "300px" }}
//           />
//         </div>
//       )
//     </>
//   );
// };
