import React from "react";
import Dashboard from "./Dashboard";
import DailyActiveUser from "./DailyActiveUser";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Dashboard />
      <DailyActiveUser />
      <Footer />
    </div>
  );
}

export default Home;
