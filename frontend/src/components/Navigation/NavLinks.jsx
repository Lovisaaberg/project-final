import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #cf4b14;
  }

  &.active {
    color: #cf4b14;
  }
`

export const NavLinks = ({ label, to, handleMenuClick }) => {
  return <StyledNavLink to={to} onClick={handleMenuClick}>{label}</StyledNavLink>
}
