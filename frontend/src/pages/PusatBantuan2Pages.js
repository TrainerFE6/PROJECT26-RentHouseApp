import React from "react";
import Footer2 from "../components/Footer2";
import styled from "styled-components";
import BantuanSection2 from "../components/BantuanSection2";
import Header2 from "../components/Header2";
import FAQSection from "../components/FAQSection";

const Content = styled.div`
  padding-top: 60px;
`;

function Bantuan2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <Content>
        <BantuanSection2 />
        <FAQSection />
      </Content>
      <Footer2 />
    </div>
  );
}

export default Bantuan2;
