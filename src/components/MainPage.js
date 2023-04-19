import Header from './Header'
import NavPages from './NavPages'
import Login from './Login'


function MainPage(isLoggedIn=false) {

  return (

    <div>
      {!isLoggedIn ? <Login/>:      
     <>
     <Header/>
      <NavPages/></>
      }

    </div>
  )
}

export default MainPage
