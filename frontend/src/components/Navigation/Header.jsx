import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo.svg"
import mobileMenu from "../../assets/icons/mobileMenu.png"
import mobileMenuClose from "../../assets/icons/mobileMenuClose.png"
import { MobileMenu } from "./MobileMenu"
import { MainMenu } from "./MainMenu"
import { Breadcrumbs } from "./Breadcrumbs"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-main);
  box-sizing: border-box;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    padding: 80px 60px;
  }
`

const Logo = styled.img`
  width: 60px;

  @media (min-width: 768px) {
    width: 100px;
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    max-width: 40px;
    margin: 20px 20px;
  }
`

const MobileMenuContainer = styled.div`
  display: ${(props) => (props.$active ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--background-color);
  opacity: 80%;
  width: 100%;
  height: 100vh;
  z-index: 1000;

  &:hover {
    color: #cf4b14;
  }
`

const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  top: 80px;
`

export const Header = () => {
  const [active, setActive] = useState(false)

  //Function to handle mobile menu
  const handleMobileMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <BreadcrumbContainer>
          <Breadcrumbs />
        </BreadcrumbContainer>
        <NavContainer>
          <MainMenu />
          <MobileMenuContainer $active={active}>
            <MobileMenu />
          </MobileMenuContainer>
        </NavContainer>
        <MobileMenuIcon onClick={handleMobileMenu}>
          {!active ? (
            <img src={mobileMenu} alt="Mobile menu icon" />
          ) : (
            <>
              <img src={mobileMenuClose} alt="Mobile menu close icon" />
            </>
          )}
        </MobileMenuIcon>
      </HeaderContainer>
    </>
  )
}
