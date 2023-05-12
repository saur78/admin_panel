import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import upIcon from "../assets/images/Polygon 2.svg";
import downIcon from "../assets/images/Polygon 2 down.svg";
import growth from "../assets/animations/growth.gif";
import growthTwo from "../assets/animations/growth 2.gif";
import down from "../assets/animations/down.gif";
import thumbsUp from "../assets/animations/thumbsUp.gif";
import SendMessage from "./SendMessage";
import ChatAdmin from "./ChatAdmin";
import Lottie from "lottie-react";
import animationData from "../assets/animations/59839.json";
import axios from "axios";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [svgClassName, setsvgClassName] = useState("chatAdminMessageIcon");
  const [participantChallenges, setParticipantChallenges] = useState();
  const [participantChallengesGrowth, setParticipantChallengesGrowth] = useState();



  //handle ChatBox open and close
  const handleClickOpen = () => {
    setOpen((open) => !open);
    setsvgClassName((prevClassName) =>
      open ? "chatAdminMessageIcon" : "chatAdminMessageIconSmall"
    );
  };


  //fetching participants in challenges
  useEffect(() => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/participantchallenges",
      headers: {
        "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
      },
      data: {
        method: "participantchallenges",
        company_id: 1,
      },
    };

    axios(config)
      .then(function (response) {
        setParticipantChallenges(response.data[0].count);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  //fetching participants in challenges growth
  useEffect(() => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/participantchallengesgrowth",
      headers: {
        "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
      },
      data: {
        method: "participantchallengesgrowth",
        company_id: 1,
      },
    };

    axios(config)
      .then(function (response) {
        setParticipantChallengesGrowth(response.data[0].count);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  //converting for the growth of participants in challenges into percentage
  const participantChallengesGrowthPercent = ((participantChallengesGrowth *100)/participantChallenges)
  console.log(participantChallengesGrowthPercent)

  return (
    <>
      <div className="dashboardHeader">
        <div className="headerLeft">
          <h1>Dashboard</h1>
        </div>
        <div className="headerRight">
          <div className="messageAdmin">
            <SendMessage />
          </div>
          <button className="chatAdmin">Chat with Admin</button>
        </div>
      </div>
      <div className="dashboardDetails">
        <div className="dashboardCard">
          <h3>Participants in Challenges</h3>
          <div className="dashboardGrowth">
            <div className="growthDetails">
              <h1>
                {participantChallenges}{" "}
                <img src={upIcon} alt="" style={{ height: 15 }} />
              </h1>
              <p>
                <span>Growth:</span>{participantChallengesGrowthPercent}%
              </p>
            </div>
            <div className="growthGraph">
              <img src={growth} alt="" />
            </div>
          </div>
        </div>
        <div className="dashboardCard">
          <h3>Registered Users</h3>
          <div className="dashboardGrowth">
            <div className="growthDetails">
              <h1>
                50 <img src={downIcon} alt="" style={{ height: 15 }} />
              </h1>
              <p>
                <span>Growth:</span>20.03%
              </p>
            </div>
            <div className="growthGraph">
              <img src={growthTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="dashboardCard">
          <h3>Unregistered Users</h3>
          <div className="dashboardGrowth">
            <div className="growthDetails">
              <h1>
                50 <img src={downIcon} alt="" style={{ height: 15 }} />
              </h1>
              <p>
                <span>Growth:</span>20.03%
              </p>
            </div>
            <div className="growthGraph">
              <img src={down} alt="" style={{ width: 85 }} />
            </div>
          </div>
        </div>
        <div className="dashboardCard">
          <h3>Most Popular Activity</h3>
          <div className="dashboardGrowth">
            <div className="growthDetails">
              <h1>Zumba</h1>
            </div>
            <div className="growthGraph">
              <img
                src={thumbsUp}
                alt=""
                style={{ marginTop: 0, height: 100, width: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={svgClassName}>
        <Lottie
          animationData={animationData}
          autoplay
          loop
          onClick={handleClickOpen}
        />
      </div>
      {open && <ChatAdmin />}
    </>
  );
}

export default Dashboard;
