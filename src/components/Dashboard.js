import React, { useState } from "react";
import '../css/Dashboard.css'
import upIcon from '../assets/images/Polygon 2.svg'
import downIcon from '../assets/images/Polygon 2 down.svg'
import growth from '../assets/animations/growth.gif'
import growthTwo from '../assets/animations/growth 2.gif'
import down from '../assets/animations/down.gif'
import thumbsUp from '../assets/animations/thumbsUp.gif'
import SendMessage from "./SendMessage";
import ChatAdmin from "./ChatAdmin";

function Dashboard() {
  return (
    <>
      <div className='dashboardHeader'>
        <div className='headerLeft'>
          <h1>Dashboard</h1>
        </div>
        <div className='headerRight'>
          <div className='messageAdmin'><SendMessage/></div>
          <button className='chatAdmin'>Chat with Admin</button>
        </div>
      </div>
      <div className='dashboardDetails'>
        <div className='dashboardCard'>
          <h3>Participants in Challenges</h3>
          <div className='dashboardGrowth'>
            <div className='growthDetails'>
              <h1>50 <img src={upIcon} alt="" style={{'height': 15, }}/></h1>
            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className='growthGraph'>
              <img src={growth} alt="" />
            </div>
          </div>
        </div>
        <div className='dashboardCard'>
          <h3>Registered Users</h3>
          <div className='dashboardGrowth'>
            <div className='growthDetails'>
            <h1>50 <img src={downIcon} alt="" style={{'height': 15, }}/></h1>
            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className='growthGraph'>
              <img src={growthTwo} alt=""/>
            </div>
          </div>
        </div>
        <div className='dashboardCard'>
          <h3>Unregistered Users</h3>
          <div className='dashboardGrowth'>
            <div className='growthDetails'>
            <h1>50 <img src={downIcon} alt="" style={{'height': 15, }}/></h1>
            <p><span>Growth:</span>20.03%</p>
            </div>
            <div className='growthGraph'>
              <img src={down} alt="" style={{'width':85}} />
            </div>
          </div>
        </div>
        <div className='dashboardCard'>
          <h3>Most Popular Activity</h3>
          <div className='dashboardGrowth'>
            <div className='growthDetails'>
              <h1>Zumba</h1>
            </div>
            <div className='growthGraph'>
              <img src={thumbsUp} alt="" style={{'marginTop':0, 'height':100, 'width':100,}}/>
            </div>
          </div>
        </div>
      </div>
      <ChatAdmin/>
    </>
  );
}

export default Dashboard;
