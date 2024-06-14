import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';

const Content = styled.div`
  padding-top: 60px;
`;

function Kontak() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <Content>
        <ContactSection />
      </Content>
      <br></br>
      <Footer />
    </div>
  );
}

export default Kontak;
