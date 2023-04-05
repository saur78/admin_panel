import './App.css';
import DailyActiveUser from './components/DailyActiveUser';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <DailyActiveUser/>
      <Footer/>
    </div>
  );
}

export default App;
