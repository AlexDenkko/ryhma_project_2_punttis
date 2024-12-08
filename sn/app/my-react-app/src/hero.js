import React from 'react';
import styled from 'styled-components';
import image from './pexels-joshua-brown-173188224-13197535.jpg'

const HeroSection = styled.section`
  background-color: #222831;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  text-align: left;
  max-width: 100%;
  padding: 20px;
`;

const HeroText = styled.div`
  h1 {
    font-size: var(--hero-text-h1-font-size);
    font-weight: 700;
    margin-bottom: 10px;
    text-shadow: rgb(0, 0, 0) 1px 0 10px;
    max-width: 50%;
  }

  p {
    font-size: var(--hero-text-p-font-size);
    max-width: 50%;
    margin-bottom: 20px;
    text-shadow: rgb(0, 0, 0) 1px 0 10px;
  }
`;
const StyledImg = styled.img`
  cursor: pointer;
  width: 400px;
  transition: height 0.3s ease;
  `;

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>Tervetuloa treenaamaan meidän punttisalille!<br /></h1>
        <p>Olemme täällä auttamassa sinua saavuttamaan tavoitteesi, olitpa sitten vasta-alkaja tai kokeneempi treenaaja. Ota yhteyttä, jos sinulla on kysyttävää jäsenyydestä, palveluistamme tai haluat varata ajan personal trainerille.</p>
      </HeroText>
      <StyledImg src={image} />
    </HeroSection>
  );
};

export default Hero;
