import React from 'react';
import Header from './Header'
import './App.css'
import Footer from './Footer';
import Hero from './hero';
import styled from 'styled-components';

const StyledView = styled.section`
    padding: 60px 20px;
    text-align: center;
    background-color: #EEEEEE;
`;

const StyledAppContainer = styled.div`
    min-height: 100vh;
    overflow: auto;
`;

function App() {
  return (
    <>
      <StyledAppContainer>
        <Header />
        <Hero />
        <StyledView>
          <h2>PERSONAL TRAINERIMME</h2>
        </StyledView>
        <Hero />
        <Hero />
        <Hero />
        <Footer />
      </StyledAppContainer>
    </>
  );
}

export default App;
