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
  color: #ffffff;

  h1 {
    font-family: var(--font-family-headlines);
    font-size: var(--font-size-text-mob);
    color: var(--headline-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0vh;
  }

  h2 {
    font-family: var(--font-family-headlines);
    font-size: var(--font-size-text-mob);
    font-weight: 300;
    color: var(--headline-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
  }

  p {
    font-size: var(--font-size-h2-mob);
    font-family: var(--font-family-text);
    color: #cf4b14;
    font-weight: 300;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 5vh;
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
        <h1>404</h1>
        <h2>NOT FOUND</h2>
        <p>You are lost in space</p>
      </NotFoundContent>
      <StyledLink to="/">
        <Button>GO HOME</Button>
      </StyledLink>
    </NotFoundContainer>
  )
}
