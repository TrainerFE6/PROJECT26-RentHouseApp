import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import KosList from "../components/KosList";
import Footer from "../components/Footer";
import styled from "styled-components";
import KeunggulanSection from "../components/KeunggulanSection";
import FAQSection from "../components/FAQSection";

const Content = styled.div`
  padding-top: 60px;
`;

function Home() {
  return (
    <div>
      <Header />
      <br></br>
      <Content>
        <HeroSection />
        <KosList />
        <KeunggulanSection />
        <FAQSection />
      </Content>
      <Footer />
    </div>
  );
}

export default Home;
