import React from "react";

import styled from "styled-components";
import Header2 from "../components/Header2";
import KosDetail2 from "../components/KosDetail2";
import Footer2 from "../components/Footer2";

const Content = styled.div`
  padding-top: 60px;
`;

function DetailKosPage2() {
  return (
    <div>
      <Header2 />
      <br></br>
      <br></br>
      <Content>
        <KosDetail2 />
      </Content>
      <Footer2 />
    </div>
  );
}

export default DetailKosPage2;
