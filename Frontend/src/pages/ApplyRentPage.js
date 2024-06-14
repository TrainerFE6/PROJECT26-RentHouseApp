import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ApplyRent from '../components/ApplyRent';

const Content = styled.div`
  padding-top: 60px;
`;

function ApplyRentPage() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <ApplyRent />
      </Content>
      <br></br>
      <Footer />
    </div>
  );
}

export default ApplyRentPage;
