import styled from 'styled-components';

export const Section = styled.section`
  background-color: #CDE8E5;
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  color: black;
`;

export const Content = styled.div`
  background-color: #CDE8E5;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 90%;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
