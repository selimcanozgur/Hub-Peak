import Logo from "../components/Logo";
import Navbar from "./Navbar";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-6 border">
      <Logo />
      <Navbar />
      <div className="flex gap-4 text-xl">
        <PiShoppingCartSimpleThin />
        <CiUser />
        <CiSearch />
      </div>
    </header>
  );
};

export default Header;
