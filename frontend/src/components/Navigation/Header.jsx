import { useState, useEffect, useRef } from "react"
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
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-main);
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`

const Logo = styled.img`
  width: 60px;
  padding: 0px 20px;

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

const MobileMenuWrapper = styled.div`
  position: absolute;
  background-color: var(--background-color);
  top: 0;
  right: 70%;
  height: 100%;
  width: 300px;
  z-index: 1000;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  transition: transform 1s ease-in-out;

  @media (max-width: 420px) {
    width: 70%;
    width: 20vh;
  }
`

const BreadcrumbContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Function to handle mobile menu
  const handleMobileMenu = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 500)
    } else {
      setIsMenuOpen(true)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>

        <NavContainer ref={menuRef}>
          <MainMenu />
          {isMenuOpen && (
            <MobileMenuWrapper isOpen={isMenuOpen}>
              <MobileMenu handleMenuClick={handleMobileMenu} />
            </MobileMenuWrapper>
          )}
          <MobileMenuIcon onClick={handleMobileMenu}>
            {!isMenuOpen ? (
              <img src={mobileMenu} alt="Mobile menu icon" />
            ) : (
              <img src={mobileMenuClose} alt="Mobile menu close icon" />
            )}
          </MobileMenuIcon>
        </NavContainer>
      </HeaderContent>
      <BreadcrumbContainer>
        <Breadcrumbs />
      </BreadcrumbContainer>
    </HeaderContainer>
  )
}
