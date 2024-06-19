import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

export const FormWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const DataContainer = styled.div`
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const DataText = styled.span`
  font-size: 16px;
  color: #333;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: red;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 10px 20px;
  }
`;
