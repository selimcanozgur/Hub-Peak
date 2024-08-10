import React, { useEffect, useState } from "react";
import DashSideBar from "../../components/DashSideBar";
import DashProfile from "../../components/DashProfile";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div>
      <div>
        <DashSideBar />
      </div>
      {/*Profile*/}
      {tab === "profile" && <DashProfile />}
    </div>
  );
};

export default Dashboard;
