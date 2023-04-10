import React from "react";
import { BiBell } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <a class="navbar-brand" href="#">
                <img src="../../images/logo.png" alt="Bootstrap" />
              </a>
            </div>
            <BiBell className="me-5" style={{ color: "#9B9B9B" }} />
            <RxEnvelopeClosed style={{ color: "#9B9B9B" }} />
            <div className="nav-item dropdown">
              <img
                src="../../images/2.jpg"
                width="40px"
                height="40px"
                style={{
                  objectFit: "cover",
                  borderRadius: " 50%",
                }}
                alt="profile"
                className="ms-5 d-block nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              />
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/logout">
                    logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
