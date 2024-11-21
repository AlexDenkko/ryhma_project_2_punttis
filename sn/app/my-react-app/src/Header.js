import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './paskapunttis_logo_white.png'; // Import the logo

const HeaderContainer = styled.header`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  position: relative;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 150px;
  width: auto;
  transition: height 0.3s ease;

  @media screen and (max-width: 1100px) {
    height: 100px; /* Adjust the height for smaller screens */
  }

  @media screen and (max-width: 600px) {
    height: 75px; /* Adjust the height for even smaller screens */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f0f0f0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  margin: 4px 0;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
`;

const MobileNav = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 60px;
  width: 100%;
  background-color: #000000a1;
  text-align: center;
  padding: 20px 0;

  &.open {
    display: flex;
  }
`;

const CtaButton = styled.button`
  padding: 9px 25px;
  background-color: #F0F0F0;
  border: none;
  border-radius: 2.5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transform: scale(1);

  &:hover {
    background-color: #FF5100;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1100px) {
    display: none; /* Hide the button on mobile devices */
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo
        src={logo} // Use the imported logo
        alt="logo"
      />
      {/* Desktop Navigation */}
      <nav>
        <NavLinks>
          <li><NavLink href="index.html">Etusivu</NavLink></li>
          <li><NavLink href="#meista">Meistä</NavLink></li>
          <li><NavLink href="#palvelut">Palvelut</NavLink></li>
          <li><NavLink href="#yhteystiedot">Yhteystiedot</NavLink></li>
        </NavLinks>
      </nav>
      <CtaButton>LIITY JÄSENEKSI!</CtaButton>
      {/* Hamburger Menu */}
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      {/* Mobile Navigation */}
      <MobileNav className={isOpen ? 'open' : ''}>
        <li><NavLink href="index.html">Etusivu</NavLink></li>
        <li><NavLink href="#meista">Meistä</NavLink></li>
        <li><NavLink href="#palvelut">Palvelut</NavLink></li>
        <li><NavLink href="#yhteystiedot">Yhteystiedot</NavLink></li>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
