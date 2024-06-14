import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import BantuanSection from '../components/BantuanSection';
import FAQSection from '../components/FAQSection';

const Content = styled.div`
  padding-top: 60px;
`;

function Bantuan() {
  return (
    <div>
      <Header />
      <br></br>
      <Content>
        <BantuanSection />
        <FAQSection />
      </Content>
      <Footer />
    </div>
  );
}

export default Bantuan;
