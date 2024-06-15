import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 200px;
  margin-left: 20px;
  text-align: center;

  img {
    width: 80%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 10px;
  text-align: center;

  p {
    margin: 5px 0;
    font-size: 16px;
  }

  a {
    display: flex;
    color: #000;
    text-decoration: none;
    margin: 5px 0;

    img {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormWrapper = styled.div`
  flex: 2;
  min-width: 300px;
  max-width: 600px;
  margin-right: 20px;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;

export const PhoneNumber = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 16px 60px;
  border: none;
  border-radius: 10px;
  background-color: #7AB2B2;
  color: black;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #7AB2B2;
  }
`;
