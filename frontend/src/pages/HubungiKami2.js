import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';

const Content = styled.div`
  padding-top: 60px;
`;

function Kontak2() {
  return (
    <div>
      <Header2 />
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

export default Kontak2;
