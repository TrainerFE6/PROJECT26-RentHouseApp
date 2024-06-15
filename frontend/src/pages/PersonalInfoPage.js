import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import PersonalInfo from '../components/PersonalInfo';

const Content = styled.div`
  padding-top: 60px;
`;

function PersonalInfoPage() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <PersonalInfo />
      </Content>
      <br></br>
      <Footer />
    </div>
  );
}

export default PersonalInfoPage;
