import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest, loginSuccess, loginFail } from "./userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginRequest());
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post("/api/v1/users/login", {
        email,
        password,
        config,
      });

      dispatch(loginSuccess(data));
      navigate("/");
    } catch (err) {
      dispatch(loginFail(err.response.data.message));
    }
  };

  return (
    <>
      <div className="hero py-12 bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-24">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              <label> Şimdi Giriş Yap! </label>
            </h1>
            <p className="py-6 w-[500px] text-lg">
              Giriş yaparak hesap ayrıntılarınıza ulaşabilir ve uygulama
              gezisini genişletebilirsiniz.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <label>E-Posta</label>
              <input
                type="email"
                placeholder="Örn: selimozgur26@gmail.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="label">Şifre</label>
              <input
                type="password"
                placeholder="**********"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex mt-2">
                <p>Henüz bir hesabın yok mu? </p>
                <Link
                  className="text-blue-400 underline  font-semibold"
                  to="/signup"
                >
                  <p>Kayıt Ol</p>
                </Link>
              </div>

              <div className="form-control mt-4">
                <button className="btn hover:bg-blue-600 bg-blue-500 text-slate-100">
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
