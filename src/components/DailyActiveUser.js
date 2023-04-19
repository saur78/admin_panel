import '../css/DailyActiveUser.css'
import ActiveUsersChart from './ActiveUsersChart'
import awardsWon from "../assets/images/vuesax-bulk-medal-star.svg"
import challengesDone from '../assets/images/vuesax-bulk-like-dislike.svg'
import eventsAttended from '../assets/images/vuesax-bulk-smileys.svg'


function DailyActiveUser() {

  return (
    <div className='dailyActiveUser'>
        <div className='dailyUserChartDetails'>
        <h2>Daily Active Users</h2>
        <select className='year'>
            <option className='option' >This Year</option>
            <option className='option'  >2022</option>
            <option className='option'  >2021</option>
        </select>
            <ActiveUsersChart/>
        </div>
        <div className='dailyUserCardDetails'>
        <h2>Activity</h2>
        <div className='dailyUserCard row' >
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Challenges done</p>
            </div>
            <div className='dailyActivityCount'>
                <p>40</p>
                <div className='icon' style={{'backgroundColor':'#f9f9eb'}}><img src={challengesDone} alt=''/></div>
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Awards won</p>
            </div>
            <div className='dailyActivityCount'>
                <p>40</p>
                <div className='icon'  style={{'backgroundColor':'#eff5e7'}}><img src={awardsWon} alt=''/></div>
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        </div>
        <div className='dailyUserCard row' >
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Events Attended</p>
            </div>
            <div className='dailyActivityCount'>
                <p>400</p>
                <div className='icon' style={{'backgroundColor':'#f0e6fe'}}><img src={eventsAttended} alt=''/></div>
                
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        <div className='dailyUserCardSingle upcomingEvent'>
            
        </div>
        </div>
        </div>
    </div>
  )
}

export default DailyActiveUser
