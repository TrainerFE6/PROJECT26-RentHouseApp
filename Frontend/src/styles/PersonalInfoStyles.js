import styled from 'styled-components';

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
  background-color: rgba(255, 255, 255, 0.9); /* Transparan putih */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

export const Title = styled.h2`
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

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Option = styled.option``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #7AB2B2;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #6fa9a9;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 10px 20px;
  }
`;
