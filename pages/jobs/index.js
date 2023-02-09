/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import style from "../../styles/pages/style.module.scss";
import Head from "next/head";
import Navbar from "../../components/organism/navbar";
import Footer from "../../components/organism/footer";
import { getCookie } from "cookies-next";
import Link from "next/link";

function Index(props) {
  const { jobList } = props;

  return (
    <>
      <Head>
        <title>Job List | Hire Jobs</title>

        {/* <style>
          {`
            body {
              background-color: blue !important;
            }
         `}
        </style> */}
      </Head>

      <main>
        <Navbar />

        <div id="Jobs">
          <div className={`topjobs ${style.topjobs}`}>
            <div className="container">
              <h4 className="pt-2">Top Jobs</h4>
            </div>
          </div>
          <div className="container">
            <div className="search mt-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategori
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Nama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Skill
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Lokasi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Freelance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sortir Berdasarkan Fulltime
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#5E50A1" }}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="job mt-5">
              <div className="row">
                <div className="col-3 mb-3">
                  <Link href="/jobs/detail/slug">
                    <div className="card">
                      <div className="card-body">
                        <img
                          src="../../images/2.jpg"
                          alt="profile"
                          width="30%"
                        />
                        <h5 style={{ color: "#1F2A36" }}>Lorem Ipsum</h5>
                        <p style={{ fontSize: "small", color: "#9EA0A5" }}>
                          Web Developer
                        </p>
                        <p style={{ fontSize: "small", color: "#9EA0A5" }}>
                          Lorem Ipsum
                        </p>
                        <span className="badge text-bg-warning me-1">PHP</span>{" "}
                        <span className="badge text-bg-warning me-1">
                          Javascript
                        </span>{" "}
                        <span style={{ fontSize: "small", color: "#9EA0A5" }}>
                          8+
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/job-list`
  );
  const convertData = jobList.data;

  const token = getCookie("token", { req, res });

  console.log(token);

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
  };
}

export default Index;
