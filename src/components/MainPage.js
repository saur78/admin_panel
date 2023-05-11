import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, logout } from '../redux/Features/loginSlice';
import Header from './Header';
import Login from './Login';

function MainPage() {
  const dispatch = useDispatch();
  const loginAuth = useSelector((state) => state.login);
  const { isLoggedIn } = loginAuth;

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (storedIsLoggedIn !== isLoggedIn) {
      dispatch(storedIsLoggedIn ? fetchLogin() : logout());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? <Header /> : <Login />}
    </div>
  );
}

export default MainPage;
