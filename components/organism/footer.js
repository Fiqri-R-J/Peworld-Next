import React from "react";
import style from "../../styles/pages/style.module.scss";

export default function footer() {
  return (
    <div>
      <footer>
        <div className={`footer ${style.footer}`}>
          <div className="container">
            <img
              src="../../images/logo2.png"
              widht="108px"
              height="30px"
              alt=""
            />
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In
              euismod ipsum et dui <br /> rhoncus auctor.
            </p>
            <hr
              className="mt-5"
              style={{
                height: "2px",
                borderWidth: "0",
                color: "white",
                backgroundColor: "white",
              }}
            />
            <p className="mt-4">2023 Pewworld. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
