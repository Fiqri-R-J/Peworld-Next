import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import style from "../../styles/pages/style.module.scss";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

export default function register() {
  const router = useRouter();
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [phone_number, setPhone_Number] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let checkIsLogin =
      localStorage.getItem("token") && localStorage.getItem("profile");

    if (checkIsLogin) {
      router.replace("/");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/register", {
        fullname,
        email,
        company,
        position,
        phone_number,
        password,
      });

      setIsLoading(false);
      setError(null);

      if (connect?.data?.data?.recruiter_id) {
        localStorage.setItem("token", connect?.data?.token);
        localStorage.setItem("profile", JSON.stringify(connect?.data?.data));

        setCookie("token", connect?.data?.token);
        router.replace("/jobs");
      } else {
        setError("Can't login in this area");
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.messages ?? "Something wrong in our server"
      );
    }
  };
  return (
    <div>
      <Head>
        <title>Register Recruiter | Hire Jobs</title>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className={`picture ${style.picture}`}>
              <div className={`overlay ${style.overlay}`}>
                <div className={`content ${style.content}`}>
                  <h1 className="ms-3 text-light fw-bold">
                    Temukan developer <br /> berbakat & terbaik <br /> di
                    berbagai bidang <br /> keahlian
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <h1 className="mt-5">Halo, Pewpeople</h1>
              <p className="fw-semibold mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <div className="container pe-5">
                <form>
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
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="nameHelp"
                      placeholder="Masukan Nama Perusahaan"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">
                      Jabatan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="nameHelp"
                      placeholder="Posisi di Perusahaan Anda"
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
                    <label for="exampleInputPassword1" class="form-label">
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Masukan kata sandi"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      {" "}
                      Konfirmasi Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Masukan kata sandi"
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-warning text-light"
                      type="button"
                    >
                      Daftar
                    </button>
                  </div>
                  <p className="text-center">
                    Anda belum sudah punya akun?
                    <Link href="/auth/login" className="link-warning">
                      Masuk disini
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
