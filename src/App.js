import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainPage/>
    </BrowserRouter>

    {/* <Home/> */}
    {/* <EmployeeManagement/> */}
    {/* <AddEmployee/> */}
    {/* <Login/> */}
    {/* <ForgetPassword/> */}
    {/* <Header/> */}

    </div>
  );
}

export default App;





