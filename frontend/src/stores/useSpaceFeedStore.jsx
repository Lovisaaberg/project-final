import { create } from "zustand"

// Initial states
export const useSpaceFeedStore = create((set) => ({
  spaceFeed: [],
  message: "",
  likes: 0,
  createdAt: "",
  loading: false,
  error: null,

  // Fetch the Space feed using API
  fetchSpaceFeed: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch(
        "https://project-final-45vw.onrender.com/space-feed",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
              "https://project-final-45vw.onrender.com/space-feed",
          },
        }
      )
      const data = await response.json()
      set({ spaceFeed: data.response, loading: false })
    } catch (error) {
      set({ error, loading: false })
    }
  },

  // Function to POST message
  postSpaceMessage: async (message) => {
    const createdAt = new Date()

    set({ loading: true, error: null })
    try {
      const response = await fetch(
        "https://project-final-45vw.onrender.com/space-feed",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, createdAt }),
        }
      )

      if (!response.ok) {
        throw new Error(
          "Failed to show any messages. Please try to reload the page and try again."
        )
      }

      const newMessage = await response.json()

      //Update state with the new message if needed
      set((state) => ({
        spaceFeed: [newMessage.response, ...state.spaceFeed],
        loading: false,
      }))
    } catch (error) {
      console.error("Error posting message", error)
      set({ error: error.message, loading: false })
    }
  },

  // Function to like a message
  likeSpaceMessage: async (messageId) => {
    set({ loading: true })

    try {
      const response = await fetch(
        `https://project-final-45vw.onrender.com/space-feed/${messageId}/like`,
        {
          method: "POST",
        }
      )
      const likedMessage = await response.json()
      set((state) => ({
        spaceFeed: state.spaceFeed.map((message) =>
          message._id === messageId ? likedMessage.response : message
        ),
        loading: false,
      }))
    } catch (error) {
      console.error("Error liking post", error)
      set({ error, loading: false })
    }
  },
}))
