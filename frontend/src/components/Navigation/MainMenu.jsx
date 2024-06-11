import GlobalStyles from "../GlobalStyles"
import { NavLinks } from "./NavLinks"
import styled from "styled-components"

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: var(--font-family-headlines);
  font-size: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin-left: 40px;
`

export const MainMenu = () => {
  const navLinks = [
    { label: "_PLANETS", to: "/planets" },
    { label: "_MASS CONVERTER", to: "/massconverter" },
    { label: "_THE SUN", to: "/celestial/sun" },
    { label: "_THE MOON", to: "/celestial/moon" },
  ]

  return (
    <>
      <GlobalStyles />
      <Menu>
        {navLinks.map((link, index) => (
          <MenuItem key={`navlink-${index}`}>
            <NavLinks label={link.label} to={link.to} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
