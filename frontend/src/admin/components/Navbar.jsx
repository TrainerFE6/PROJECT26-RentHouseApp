import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Nav = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState("");
  const [, setToken] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // cara mengambil username di table
  useEffect(() => {
    const getToken = async () => {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setAdmin(decoded.username);
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

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#EEF7FF" }}
    >
      <div className="container-fluid">
        <i
          className="navbar-brand bi bi-justify-left fs-4"
          style={{ color: "black", cursor: "pointer" }}
          onClick={toggleNavbar}
        ></i>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarText"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
          <ul
            className="navbar-nav mb-3 mb-lg-0"
            style={{ paddingRight: "75px" }}
          >
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, {admin}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={Logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
