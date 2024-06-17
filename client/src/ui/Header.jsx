import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
    </div>
  );
};

export default Header;
