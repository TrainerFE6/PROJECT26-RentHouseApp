import React from 'react';
import Kos2 from '../components/Kos2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header2 from '../components/Header2';

const Content = styled.div`
  padding-top: 60px;
`;

function Cari2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <Kos2 />
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

export default Cari2;
