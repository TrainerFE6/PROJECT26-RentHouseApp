import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  width: 300px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: calc(100% - 70px);
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #cde8e5;
  color: black;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #cde8e5;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 10px;
  }
`;
