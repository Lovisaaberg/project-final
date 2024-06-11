import { NavLinks } from "./NavLinks"
import styled from "styled-components"

const MobileMenuContainer = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: var(--font-family-headlines);
    font-size: 20px;
    justify-content: flex-end;
  }
`
const MobileMenuItem = styled.li`
  margin: 10px 0;
`

export const MobileMenu = () => {
  const mobileLinks = [
    { label: "_PLANETS", to: "/planets" },
    { label: "_MASS CONVERTER", to: "/massconverter" },
    { label: "_THE SUN", to: "/sun" },
    { label: "_THE MOON", to: "/moon" },
  ]

  return (
    <MobileMenuContainer>
      {mobileLinks.map((link, index) => (
        <MobileMenuItem key={`navlink-${index}`}>
          <NavLinks label={link.label} to={link.to} />
        </MobileMenuItem>
      ))}
    </MobileMenuContainer>
  )
}
