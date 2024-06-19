import React from "react";
import Header2 from "../components/Header2";
import styled from "styled-components";
import ContactSection2 from "../components/ContactSection2.js";
import Footer2 from "../components/Footer2";

const Content = styled.div`
  padding-top: 60px;
`;

function Kontak2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <ContactSection2 />
      </Content>
      <br></br>
      <Footer2 />
    </div>
  );
}

export default Kontak2;
