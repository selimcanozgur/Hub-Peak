import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/userApi";
import Header from "../ui/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Login = () => {
  const navigate = useNavigate();
  const { user, error, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

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
            {error && <Error>{error}</Error>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
