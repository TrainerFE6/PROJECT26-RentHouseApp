import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Footer2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Footer pt-3" style={{ backgroundColor: " #CDE8E5" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>BANGKOST</h3>
              <p>
                Kami berharap BangKost bisa menjadi satu aplikasi untuk semua
                kebutuhan kost Anda.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link onClick={() => navigate("/home2")}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => navigate("/cari2/:id")}>
                    Cari Kamar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => navigate("/kontak2")}>
                    Hubungi Kami
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Quick Links</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +62 85647528716
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> bangkost@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Indonesia, Jawa Tengah
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-copyright text-center py-3"
        style={{ backgroundColor: "#CDE8E5" }}
      >
        © 2024 Copyright:
        <a href="https://github.com/TrainerFE6/PROJECT26-RentHouseApp">
          bangkost
        </a>
      </div>
    </>
  );
};

export default Footer2;
