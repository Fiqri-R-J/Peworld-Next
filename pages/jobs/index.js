/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import style from "../../styles/pages/style.module.scss";
import Head from "next/head";
import Navbar from "../../components/organism/navbar";
import Footer from "../../components/organism/footer";
import CardJob from "../../components/molecules/CardJob";
import { getCookie } from "cookies-next";
import Link from "next/link";

function Index(props) {
  const { jobList } = props;
  const [data, setData] = React.useState(jobList.data.rows);
  const [keyword, setKeyword] = React.useState("");
  const [sort, setSort] = React.useState(["id", "DESC"]);
  console.log(sort);
  const search = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1&keyword=${keyword}`
      )
      .then((res) => {
        setData(res.data.data.rows);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1&order=${sort[1]}&sortBy=${sort[0]}`
      )
      .then((res) => {
        setData(res.data.data.rows);
      })
      .catch((err) => console.log(err));
  }, [sort]);

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
                  onChange={(event) => setKeyword(event.target.value)}
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
                    <button
                      className="dropdown-item"
                      onClick={() => setSort(["id", "ASC"])}
                    >
                      Sortir Berdasarkan Terlama
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSort(["id", "DESC"])}
                    >
                      Sortir Berdasarkan Terbaru
                    </button>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#5E50A1" }}
                  onClick={search}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="job mt-5">
              <CardJob data={data} />
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
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
  );
  console.log(jobList.data);
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
