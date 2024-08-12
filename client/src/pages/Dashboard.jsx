import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get(tab);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search, tab]);

  return (
    <div className="grid grid-cols-2">
      <div>
        <Sidebar />
      </div>
      {tab === "profile" && <Profile />}
    </div>
  );
};

export default Dashboard;
