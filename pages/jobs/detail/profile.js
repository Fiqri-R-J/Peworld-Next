import Head from "next/head";
import React from "react";
import Footer from "../../../components/organism/footer";
import Navbar from "../../../components/organism/navbar";
import style from "../../../styles/pages/style.module.scss";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FiGitlab } from "react-icons/fi";

export default function profile() {
  return (
    <>
      <Head>
        <title>Profile | Hire Jobs</title>
      </Head>
      <main>
        <Navbar />

        <div className="profile mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-3 me-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <div className={`profileImg ${style.profileImg}`}>
                      <img src="../../images/2.jpg" alt="profile" />
                    </div>
                    <h5>Louis Tomlinson</h5>
                    <p className="">Web Developer</p>
                    <p className="text-secondary">
                      <GoLocation /> Purwokerto, Jawa Tengah
                    </p>
                    <p className="text-secondary">Freelance</p>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">
                        Hire
                      </button>
                    </div>
                    <h5 className="mt-4">Skill</h5>
                    <span class="badge bg-warning me-2">Phyton</span>
                    <span class="badge bg-warning">Laravel</span>
                    <div className="contact mt-4">
                      <div className="email">
                        <BsEnvelope style={{ color: "#9EA0A5" }} />
                        <span className="text-secondary ms-2">
                          Louistommo@gmail.com
                        </span>
                      </div>
                      <div className="instagram">
                        <AiOutlineInstagram style={{ color: "#9EA0A5" }} />
                        <span className="text-secondary ms-2">@Louist91</span>
                      </div>
                      <div className="github">
                        <FiGithub style={{ color: "#9EA0A5" }} />
                        <span className="text-secondary ms-2">@Louistommo</span>
                      </div>
                      <div className="gitlab">
                        <FiGitlab style={{ color: "#9EA0A5" }} />
                        <span className="text-secondary ms-2">
                          @Louistommo91
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Portofolio
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Pengalaman Kerja
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
