import '../css/DailyActiveUser.css'
import ActiveUsersChart from './ActiveUsersChart'

function DailyActiveUser() {

  return (
    <div className='dailyActiveUser'>
        <div className='dailyUserChartDetails'>
            <ActiveUsersChart/>
        </div>
        <div className='dailyUserCardDetails'>
        <h2>Activity</h2>
        <div className='dailyUserCard'>
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Challenges done</p>
            </div>
            <div className='dailyActivityCount'>
                <p>40</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' alt=''/>
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Challenges done</p>
            </div>
            <div className='dailyActivityCount'>
                <p>40</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' alt=''/>
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        <div className='dailyUserCardSingle'>
            <div className='dailyActivity'>
                <p>Challenges done</p>
            </div>
            <div className='dailyActivityCount'>
                <p>40</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' alt=''/>
            </div>
            <div className='dailygrowth'>
            <p><span>Growth:</span>20.03%</p>
            </div>
        </div>
        <div className='dailyUserCardSingle upcomingEvent'>
          <p>See upcomig events</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DailyActiveUser
