import { Link } from "react-router-dom"
import styled from "styled-components"
import backgroundImage from "../assets/images/404background.jpg"
import { Button } from "../components/Navigation/Button"

const NotFoundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 1) 50%
      ),
      url(${backgroundImage});
    background-size: contain;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: var(--font-family-headlines);
    font-size: var(--font-size-h1-mob);
    color: var(--headline-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;

    @media (min-width: 768px) {
      font-size: var(--font-size-h1-desktop);
      margin: 0;
    }
  }

  p {
    font-size: var(--font-size-large);
    font-family: var(--font-family-text);
    color: #cf4b14;
    font-weight: 300;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 5vh;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`

const NotFoundContent = styled.div`
  margin-bottom: 10vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10vh;
  margin-bottom: 30vh;
`

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <p>Houston, we have a problem:</p>
        <h1>404 NOT FOUND</h1>
        <p>You are lost in space</p>
      </NotFoundContent>
      <StyledLink to="/">
        <Button>GO HOME</Button>
      </StyledLink>
    </NotFoundContainer>
  )
}
