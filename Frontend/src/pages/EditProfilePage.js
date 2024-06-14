import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styled from 'styled-components';
import PersonalInfo from '../components/PersonalInfo';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';

const Content = styled.div`
  padding-top: 60px;
`;

function EditProfilePage() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <EditProfile />
      </Content>
      <br></br>
      <Footer />
    </div>
  );
}

export default EditProfilePage;
