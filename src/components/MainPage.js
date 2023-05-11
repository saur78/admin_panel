import { useSelector } from 'react-redux';
import Header from './Header';
import Login from './Login';

function MainPage() {
  const loginAuth = useSelector((state) => state.login);
  const { isLoggedIn } = loginAuth;
  


  return (
    <div>
      {isLoggedIn ? <Header /> : <Login /> }
    </div>
  );
}

export default MainPage;
