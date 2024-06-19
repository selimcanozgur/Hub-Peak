import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero py-12 bg-slate-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            <label> Şimdi Giriş Yap! </label>
          </h1>
          <p className="py-6 w-[500px] text-lg">
            Giriş yaparak hesap ayrıntılarınıza ulaşabilir ve uygulama gezisini
            genişletebilirsiniz.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={"handleSubmit"}>
            <label>E-Posta</label>
            <input
              type="email"
              placeholder="Örn: selimozgur26@gmail.com"
              className="input input-bordered"
              onChange={"handleChange"}
              id="email"
            />

            <label className="label">Şifre</label>
            <input
              type="password"
              placeholder="**********"
              className="input input-bordered"
              onChange={"handleChange"}
              id="password"
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
  );
};

export default Login;
