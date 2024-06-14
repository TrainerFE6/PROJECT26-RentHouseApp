import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header2 from '../components/Header2';
import KosDetail2 from '../components/KosDetail2';

const Content = styled.div`
  padding-top: 60px;
`;

function DetailKosPage2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <KosDetail2 />
      </Content>
      <Footer />
    </div>
  );
}

export default DetailKosPage2;
