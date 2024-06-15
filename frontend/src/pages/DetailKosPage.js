import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import KosDetail from '../components/KosDetail';

const Content = styled.div`
  padding-top: 60px;
`;

function DetailKosPage() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <Content>
        <KosDetail />
      </Content>
      <Footer />
    </div>
  );
}

export default DetailKosPage;
