import styled from "styled-components";
import { Card } from "react-bootstrap";

export const OrderCard = styled(Card)`
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    margin: 10px auto;
    width: 95%;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  flex: 2;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  .kos-details {
    margin-bottom: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const CenteredMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
