import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  HeaderContainer,
  Logo,
  Nav,
  DropdownMenu,
  MenuBar,
  MobileNav,
  ProfileLink,
} from "../styles/HeaderStyles";
import logoImage from "../img/logo.png";

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded.username);
    };
    getToken();
  }, []);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logoImage} onClick={() => navigate("/home2")} />
      <MenuBar onClick={toggleMenu}>&#9776;</MenuBar>
      <Nav>
        <ul>
          <li>
            <a onClick={() => navigate("/home2")}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/cari2/:id")}>Cari Kamar</a>
          </li>
          <li>
            <a onClick={() => navigate("/check-order")}>Cek Pesanan</a>
          </li>
          <li>
            <a onClick={() => navigate("/kontak2")}>Hubungi Kami</a>
          </li>
          <li>
            <ProfileLink>
              <FaUserCircle style={{ marginRight: "8px" }} />
              {user}
            </ProfileLink>
            <DropdownMenu>
              {/* <li>
                <a onClick={() => navigate("/profile/:id")}>Profile</a>
              </li> */}
              <li>
                <a onClick={Logout}>Logout</a>
              </li>
            </DropdownMenu>
          </li>
        </ul>
      </Nav>
      {isOpen && (
        <MobileNav>
          <a onClick={() => navigate("/home2")}>Home</a>
          <a onClick={() => navigate("/cari2/:id")}>Cari Kamar</a>
          <a onClick={() => navigate("/check-order")}>Cek Pesanan</a>
          <a onClick={() => navigate("/kontak2")}>Hubungi Kami</a>
          {/* <a onClick={() => navigate("/profile/:id")}>Edit Profile</a> */}
          <a onClick={() => navigate("/")}>Logout</a>
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header2;
