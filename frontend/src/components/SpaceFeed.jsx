import { useEffect, useState } from "react";
import { useSpaceFeedStore } from "../stores/useSpaceFeedStore";
import styled from "styled-components";
import { Button } from "./Button";

const LikeButton = styled.button`
background: #000000;
color: #ffffff;
border: 2px solid;
padding: 8px;
font-family: "Space Mono";
font-weight: normal;
border-radius: 20px;
`

export const SpaceFeed = () => {
  const {
    spaceFeed,
    fetchSpaceFeed,
    postSpaceMessage,
    likeSpaceMessage,
    loading,
    error,
  } = useSpaceFeedStore();
  const [newMessage, setNewMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    fetchSpaceFeed();
  }, [fetchSpaceFeed]);

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
    setMessageError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.length < 5 || newMessage.length > 140) {
      setMessageError("Message must be between 5 and 140 characters");
      return;
    }

    postSpaceMessage(newMessage);
    setNewMessage("");
    setMessageError("");
  };

  const handleLike = (messageId) => {
    likeSpaceMessage(messageId);
  };

  return (
    <div>
      <h3>SpaceFeed</h3>

      <form className="space-feed-form" onSubmit={handleSubmit}>
        <label>
          <textarea
            className="message-textarea"
            type="text"
            value={newMessage}
            placeholder=""
            required
            onChange={handleNewMessage}
          />
        </label>
        <Button type="submit" disabled={loading}>
          POST
        </Button>
        {messageError && <p className="message-error">{messageError}</p>}
      </form>

      {messageError && <p>{messageError}</p>}

      {loading && <p>Loading...</p>}

      <ul>
        {spaceFeed && spaceFeed.length > 0 ? (
          spaceFeed.map((message) => (
            <li key={message._id}>
              <p className="roboto-mono">{message.message}</p>
              <LikeButton
                className="like-button"
                onClick={() => handleLike(message._id)}>
                🚀 ({message.likes})
              </LikeButton>
            </li>
          ))
        ) : (
          <p>No messages to display</p>
        )}
      </ul>
    </div>
  );
};
