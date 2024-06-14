import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Confirm from '../components/Confirm';

const Content = styled.div`
  padding-top: 60px;
`;

function ConfirmPage() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <Confirm />
      </Content>
      <br></br>
      <Footer />
    </div>
  );
}

export default ConfirmPage;
