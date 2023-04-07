import React from "react";
import style from "../css/Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <div className={style.dashboardHeader}>
        <div className={style.headerLeft}>
          <h1>Dashboard</h1>
        </div>
        <div className={style.headerRight}>
          <button className={style.messageAdmin}>Send message to Admin</button>
          <button className={style.chatAdmin}>Chat with Admin</button>
        </div>
      </div>
      <div className={style.dashboardDetails}>
        <div className={style.dashboardCard}>
          <h3>Participants in Challenges</h3>
          <div className={style.dashboardGrowth}>
            <div className={style.growthDetails}>
              <h1>50               <img
                src="data:image/png;base64,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"
                alt=""
                style={{'height': 15, }}
              /></h1>

            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className={style.growthGraph}>
              <img
                src="https://i.gifer.com/origin/53/5320825e79b92e6b9a3af914943ff4c9_w200.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.dashboardCard}>
          <h3>Participants in Challenges</h3>
          <div className={style.dashboardGrowth}>
            <div className={style.growthDetails}>
              <h1>50               <img
                src="data:image/png;base64,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"
                alt=""
                style={{'height': 15, }}
              /></h1>

            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className={style.growthGraph}>
              <img
                src="https://i.gifer.com/origin/53/5320825e79b92e6b9a3af914943ff4c9_w200.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.dashboardCard}>
          <h3>Participants in Challenges</h3>
          <div className={style.dashboardGrowth}>
            <div className={style.growthDetails}>
              <h1>50               <img
                src="data:image/png;base64,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"
                alt=""
                style={{'height': 15, }}
              /></h1>

            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className={style.growthGraph}>
              <img
                src="https://i.gifer.com/origin/53/5320825e79b92e6b9a3af914943ff4c9_w200.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.dashboardCard}>
          <h3>Participants in Challenges</h3>
          <div className={style.dashboardGrowth}>
            <div className={style.growthDetails}>
              <h1>50               <img
                src="data:image/png;base64,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"
                alt=""
                style={{'height': 15, }}
              /></h1>

            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className={style.growthGraph}>
              <img
                src="https://i.gifer.com/origin/53/5320825e79b92e6b9a3af914943ff4c9_w200.gif"
                alt=""
              />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Dashboard;
