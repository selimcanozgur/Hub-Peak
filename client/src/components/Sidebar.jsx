import { FaUser } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="drawer lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Profile
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <h1 className="text-center text-2xl mt-6 mb-6"> Profile Page</h1>
            <li>
              <NavLink to="/dashboard/?=profile">
                <button className="text-md">
                  <FaUser className="inline mx-2 mb-1" />
                  <label>Profile</label>
                </button>
              </NavLink>
            </li>
            <li>
              <Link>
                <button className="text-md">
                  <IoExit className="inline mx-2 mb-1" /> Log Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
