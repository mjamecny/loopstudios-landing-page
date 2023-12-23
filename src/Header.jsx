import { useState } from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("./mobile/image-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 4.8rem;
  height: 100vh;

  @media (min-width: 48em) {
    background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
      url("./desktop/image-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
  }
`

const Container = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  z-index: 10;
  width: 130px;

  @media (min-width: 48em) {
    width: 150px;
  }
`

const Menu = styled.img`
  cursor: pointer;
  z-index: 20;

  @media (min-width: 48em) {
    display: none;
  }
`

const Heading = styled.h1`
  font-family: "Josefin Sans";
  font-weight: 300;
  font-size: 4.4rem;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  padding: 2.4rem;
  margin-top: 12.8rem;

  @media (min-width: 48em) {
    width: 50%;
    font-size: 5.2rem;
  }
`

const NavList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-black);
  height: 100vh;
  width: 100%;
  display: none;
  flex-direction: column;
  padding-inline: 2.4rem;
  padding-top: 250px;
  gap: 1.2rem;

  ${(props) => props.isOpen && `display: flex;`}

  @media (min-width: 48em) {
    display: flex;
    position: static;
    background-color: transparent;
    flex-direction: row;
    padding: 0;
    height: auto;
    width: auto;
    gap: 2.4rem;
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  font-family: "Josefin Sans";
  font-size: 2rem;
  color: var(--color-white);
  text-transform: uppercase;

  @media (min-width: 48em) {
    font-family: "Alata", sans-serif;
    font-size: 1.8rem;
    text-transform: none;

    &:hover {
      padding-bottom: 0.4rem;
      box-shadow: 0 3px var(--color-white);
    }
  }
`

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="logo.svg" />
          <Menu
            src={isOpen ? `icon-close.svg` : `icon-hamburger.svg`}
            onClick={() => setIsOpen(!isOpen)}
          />
          <NavList isOpen={isOpen}>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Careers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Support</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Heading>Immersive experiences that deliver</Heading>
      </Container>
    </StyledHeader>
  )
}
