import React from 'react';
import styled from 'styled-components';
import logo from './paskapunttis_logo_white.png'; // Import the logo

const FooterContainer = styled.div`
  background-color: #000000;
  color: #F0F0F0;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px; /* Ensure there is some padding at the bottom */
  position: fixed; /* Ensure the footer is fixed at the bottom */
`;

const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FooterLogo = styled.img`
  height: 100px;
  order: 0;
`;

const SocialIcon = styled.i`
  color: #F0F0F0;
  margin: 8px 8px 40px 8px;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #FF5100;
    text-align: center;
  }
`;

const FooterNav = styled.div`
  margin-top: -40px;
  order: 1;

  ul {
    list-style: none;
  }

  a {
    color: #FBF7F4;
    text-decoration: none;
    padding: 20px;
    transition: all 0.3s ease 0s;

    &:hover {
      color: #FF5100;
      text-decoration: none;
      padding: 20px;
    }
  }
`;

const FooterHr = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: #F0F0F0;
  margin: 20px 0;
`;

const FooterContact = styled.div`
  text-align: center;
`;

const BackToTop = styled.div`
  color: #F0F0F0;
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #FF5100;
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer >
      <FooterInnerContainer>
        <FooterLogo
          src={logo} // Use the imported logo
          alt="Footerin Paska Punttis-logo"
        />
        <CenterContainer>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon  style={{ fontSize: '36px' }}></SocialIcon>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon  style={{ fontSize: '36px' }}></SocialIcon>
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon  style={{ fontSize: '36px' }}></SocialIcon>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon  style={{ fontSize: '36px' }}></SocialIcon>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon  style={{ fontSize: '36px' }}></SocialIcon>
            </a>
          </div>
          <br />
          <FooterNav>
            <ul>
              <li>
                <a href="#">Etusivu</a>
                <a href="tietoa.html">Meistä</a>
                <a href="majoitus.html">Palvelut</a>
                <a href="yhteystiedot.html">Yhteystiedot</a>
              </li>
            </ul>
          </FooterNav>
          <FooterHr/>
          <FooterContact>
            Valimotie 8, 00380 Helsinki
            <br />
            &copy; 2024 Paska Punttis
            <br /><br />
          </FooterContact>
        </CenterContainer>
        <BackToTop>
          <a href="#paska_header">
            <i  style={{ fontSize: '36px' }}></i> Takaisin ylös
          </a>
        </BackToTop>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
