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
import axios from "axios";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import Link from "next/link";

export default function profile(props) {
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
                    <h5 className="mt-4">Skill</h5>
                    <span class="badge bg-warning me-2">Phyton</span>
                    <span class="badge bg-warning">Laravel</span>
                  </div>
                </div>
              </div>
              <div className="col-6 ms-5">
                <h2>Hubungi Lous Tomlinson</h2>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div className="mb-3">
                  <label for="project" className="form-label">
                    Tujuan tentang pesan ini
                  </label>
                  <select
                    className="form-select text-secondary"
                    aria-label="Default select example"
                  >
                    <option selected>Project</option>
                    <option value="1"></option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="Name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Masukan Nama"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Masukan alamat email"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">
                    No handphone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                    placeholder="Masukan no handphone"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">
                    Deskripsi
                  </label>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "200px" }}
                    ></textarea>
                    <label for="floatingTextarea2">
                      Deskripsikan/jelaskan lebih detail{" "}
                    </label>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-warning"
                    type="button"
                    style={{ color: "white" }}
                  >
                    Hire
                  </button>
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

// export const getServerSideProps = async (context) => {
//   const connect = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
//   );

//   const connectAllData = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=15`
//   );

//   const convertData = connect.data;
//   const convertAllData = connectAllData.data;
//   console.log(convertAllData);

//   const token = getCookie("token", context) || "";
//   const profile = getCookie("profile", context) || "";
//   // console.log(token);
//   // console.log(profile);

//   return {
//     props: {
//       JobList: convertData,
//       token,
//       profile,
//       getAllDataUser: convertAllData,
//     },
//   };
// };

// export async function getServerSideProps({ req, res, query }) {
//   const profile = getCookie("profile", query) || "";
//   const jobList = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
//   );
//   console.log(jobList.data);
//   const convertData = jobList.data;

//   const token = getCookie("token", { req, res });

//   console.log(token);

//   return {
//     props: {
//       jobList: convertData,
//     }, // will be passed to the page component as props
//   };
// }
