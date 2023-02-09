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
          </div>
        </nav>
      </header>
    </div>
  );
}
