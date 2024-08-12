import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="hero py-12 bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-24">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              <label> Şimdi Kayıt Ol! </label>
            </h1>
            <p className="py-6 w-[500px] text-lg">
              Bu sayfadan uygulamaya kayıt olarak belirli alanlara erişim
              sağlayabilirsiniz.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <label>İsim</label>
              <input
                type="text"
                placeholder="Örn: Selimcan"
                className="input input-bordered"
              />

              <label>E-Posta</label>
              <input
                type="email"
                placeholder="Örn: selimozgur26@gmail.com"
                className="input input-bordered"
              />

              <label className="label">Şifre</label>
              <input
                type="password"
                placeholder="**********"
                className="input input-bordered"
              />

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Profil Fotoğrafı</span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </label>

              <div className="flex mt-2">
                <p>Zaten hesabın var mı? </p>
                <Link
                  className="text-blue-400 underline  font-semibold"
                  to="/login"
                >
                  <p>Giriş Yap</p>
                </Link>
              </div>

              <div className="form-control mt-4">
                <button className="btn hover:bg-green-600 bg-green-500 text-slate-100">
                  Kayıt Ol
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
