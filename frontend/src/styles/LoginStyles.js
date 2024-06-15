import styled from 'styled-components';
import backgroundImage from '../img/background.jpg';

export const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const LoginForm = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 300px;
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

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #7AB2B2;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #7AB2B2;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 10px;
  text-align: center;

  a {
    color: #7AB2B2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
