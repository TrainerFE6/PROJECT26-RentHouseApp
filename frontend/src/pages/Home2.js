import React from "react";
import Header2 from "../components/Header2";
import HeroSection from "../components/HeroSection";

import styled from "styled-components";
import KeunggulanSection from "../components/KeunggulanSection";
import KosList2 from "../components/KosList2";
import FAQSection from "../components/FAQSection";
import Footer2 from "../components/Footer2";

const Content = styled.div`
  padding-top: 60px;
`;

function Home2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <Content>
        <HeroSection />
        <KosList2 />
        <KeunggulanSection />
        <FAQSection />
      </Content>
      <Footer2 />
    </div>
  );
}

export default Home2;
