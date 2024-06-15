import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  position: relative;
`;

export const FAQContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  position: relative;
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
  margin-top: -40px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const FAQContent = styled.div`
  flex: 2;
  min-width: 300px;
  text-align: left;
  position: relative;
`;

export const FAQItem = styled.div`
  margin-bottom: 10px;
`;

export const Question = styled.div`
  padding: 10px;
  background-color: #4D869C;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4D869C;
  }
`;

export const Answer = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 20px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 20px;
  background-color: ${props => (props.active ? '#4D869C' : '#ddd')};
  color: ${props => (props.active ? 'white' : 'black')};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${props => (props.active ? '#4D869C' : '#ccc')};
  }

  @media screen and (max-width: 768px) {
    padding: 15px 15px;
    font-size: 14px;
  }
`;
