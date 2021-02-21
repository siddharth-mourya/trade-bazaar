import './App.css';
import Login from './Components/login/Login';
import {BrowserRouter as Router, Route , Link  } from "react-router-dom";
import SignUp from './Components/signUp/SignUp';
import DashBoard from './pages/Dashboard';
import FollowCompanies from './pages/FollowCompaines';
import News from './pages/News';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact  component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/followedCompanies" exact component={FollowCompanies} />
        <Route path="/news" exact component={News} />
        <Route path="/profile" exact component={Profile} />
      </Router>
    </div>
  );
}

export default App;
