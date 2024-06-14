import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #7ab2b2;
  color: black;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 10px;
    padding: 10px;

    @media (max-width: 768px) {
      display: none;
      flex-direction: column;
      width: 100%;
      background-color: #333;
    }
  }

  li {
    margin-left: 10px;
    position: relative;

    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;
    }
  }

  a {
    color: black;
    text-decoration: none;
    padding: 10px 15px;
    transition: color 0.3s ease, border-bottom 0.3s ease;

    &:hover {
      color: #ff6600;
      border-bottom: 2px solid #ff6600;
    }

    @media (max-width: 768px) {
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;

  ${Nav} li:hover & {
    display: block;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    color: black;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      background-color: #575757;
      color: #ff6600;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 5px;
  width: 250px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: calc(100% - 70px);
    margin-right: 0;
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

  &:hover {
    background-color: #ff4500;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 10px;
  }
`;

export const MenuBar = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #eef7ff;
  padding: 10px 0;

  a {
    color: black;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;

    &:hover {
      background-color: #575757;
    }
  }
`;

export const LoginButton = styled.button`
  background-color: #eef7ff;
  color: black;
  border: none;
  padding: 3px 50px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-top: -10px;

  &:hover {
    color: #ddd;
  }
`;
