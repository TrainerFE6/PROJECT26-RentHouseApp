import React from 'react';
import Header from '../components/Header';
import Kos from '../components/Kos';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Content = styled.div`
  padding-top: 60px;
`;

function Cari() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <Content>
        <Kos />
      </Content>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Cari;
