import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import style from "../styles/pages/style.module.scss";

export default function login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
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

      const connect = await axios.post("/api/login", {
        email,
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
        <title>Login Recruiter | Hire Jobs</title>
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
              <p className={error ? "fw-semibold mb-3" : "fw-semibold mb-5"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              {error && (
                <div class="alert alert-danger mb-3" role="alert">
                  {error}
                </div>
              )}

              <div className="container pe-5">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukan alamat email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Masukan kata sandi"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-warning text-light"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Masuk"}
                    </button>
                  </div>
                  <p className="text-center">
                    Anda belum punya akun?
                    <Link href="/auth/register" className="link-warning">
                      Daftar disini
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
