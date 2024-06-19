import React, { useEffect, useState } from "react";
import "./app.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ImgAbout from "./assets/image/Frame 4.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
function Sidebar() {
  const [active, setActive] = useState(1);
  const [admin, setAdmin] = useState("");
  const [, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setAdmin(decoded.username);
    };
    getToken();
  }, []);

  return (
    <div
      className="sidebar d-flex justify-content-between flex-column  text-white vh-100"
      style={{ backgroundColor: "#7AB2B2", width: "220px" }}
    >
      <div>
        <div className=" p-3 flex-fill" style={{ textAlign: "center" }}>
          <Image
            src={ImgAbout}
            style={{ height: "100px", width: "100px", paddingRight: "5px" }}
            alt="Responsive Image"
            roundedCircle
          />
          <br></br>
          <span className="brand-name fs-4"> {admin}</span>
        </div>

        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-2">
          <li
            className={active === 1 ? " active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <Link to="/dashboard" className="p-1">
              <i className="bi bi-speedometer2 me-1 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? " active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(2)}
          >
            <Link to="/tambah" className="p-1">
              <i className="bi bi-house-door-fill me-1 fs-5"></i>
              <span className="fs-5">Tambah Kamar</span>
            </Link>
          </li>
          <li
            className={active === 3 ? " active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <Link to="/data" className="p-1">
              <i className="bi bi-database me-1 fs-5"></i>
              <span className="fs-5">Data Kost</span>
            </Link>
          </li>
          <li
            className={active === 4 ? " active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(4)}
          >
            <Link to="/transaksi" className="p-1">
              <i className="bi bi-cash me-1 fs-5"></i>
              <span className="fs-5">Transaksi</span>
            </Link>
          </li>
          <li
            className={active === 5 ? " active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(5)}
          >
            <Link to="/penyewa" className="p-1">
              <i className="bi bi-people me-1 fs-5"></i>
              <span className="fs-5">Penyewa Kost</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
