import { useDispatch } from "react-redux";
import { userLogout } from "./userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      const res = await fetch("/api/v1/users/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(userLogout());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return <button onClick={handleClick}> Çıkış Yap </button>;
};

export default Logout;
