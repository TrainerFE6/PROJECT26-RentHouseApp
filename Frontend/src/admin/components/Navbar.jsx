import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

function Nav({ Toggle }) {
  const [active, setActive] = useState(1);
  return (
    <nav
      class="navbar navbar-expand-lg "
      style={{ backgroundColor: "#EEF7FF" }}
    >
      <div class="container-fluid">
        <i
          className="navbar-brand bi bi-justify-left fs-4"
          style={{
            color: "black",
            cursor: "pointer",
          }}
          onClick={Toggle}
        ></i>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul class="navbar-nav  mb-3 mb-lg-0" style={{ paddingRight: "75px" }}>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Notification
              </a>
            </li> */}
            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, Admin
              </a>
              <ul class="dropdown-menu ">
                {/* <li className={active === 1} onClick={(e) => setActive(1)}>
                  <Link to="/profile">
                    <a class="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link to="/">
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
