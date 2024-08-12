import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import Logout from "../feuatures/user/Logout";
import Logo from "../components/Logo";

const LiItem = () => {
  return (
    <>
      <li>
        <NavLink to="/">Anasayfa</NavLink>
      </li>
      <li>
        <NavLink to="/books">Kitaplar</NavLink>
      </li>
      <li>
        <NavLink to="/about">Hakkımızda</NavLink>
      </li>
      <li>
        <NavLink to="/contact">İletişim</NavLink>
      </li>
    </>
  );
};

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.users);

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
        {/*Logo*/}
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-md gap-8 font-montserrat">
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
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {user.role === "admin" ? (
                  <>
                    <li>
                      <Link to="/dashboard">Admin Paneli</Link>
                    </li>
                    <li>
                      <button>Ayarlar</button>
                    </li>
                    <li>
                      <button>
                        <Logout />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dashboard">Profiles</Link>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </>
                )}
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
