import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-12 font-montserrat font-medium text-sm">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/books">Books </NavLink>
        </li>

        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
