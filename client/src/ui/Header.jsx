import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button";
import Search from "../components/Search";
import { useSelector } from "react-redux";

const LiItem = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
    </>
  );
};

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <div className="navbar border shadow-md py-6 px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/*Responsive Nav*/}
            <LiItem />
          </ul>
        </div>
        <p className="text-3xl uppercase font-semibold">
          <Link to="/"> 📕 Hub Peak </Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1">
          {/*Main Nav*/}
          <LiItem />
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <Search />
        {isAuthenticated ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profil
                    <span className="badge">Yeni</span>
                  </a>
                </li>

                <li>
                  <a>Çıkış</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Button color="bg-blue-300">
              <Link to="/signup">Kayıt Ol</Link>
            </Button>
            <Button color="bg-green-300">
              <Link to="/login"> Giriş Yap </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
