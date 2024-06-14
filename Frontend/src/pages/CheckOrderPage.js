import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import CheckOrder from '../components/CheckOrder';

const Content = styled.div`
  padding-top: 60px;
  padding-bottom: 250px;
`;

function CheckOrderPage() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Content>
        <CheckOrder />
      </Content>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default CheckOrderPage;
