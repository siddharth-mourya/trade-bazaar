import './App.css';
import Login from './Components/login/Login';
import {BrowserRouter as Router, Route , Link  } from "react-router-dom";
import SignUp from './Components/signUp/SignUp';
import DashBoard from './pages/Dashboard';
import FollowCompanies from './pages/FollowCompaines';
import Company from './pages/Company';
import News from './pages/News';
import Profile from './pages/Profile';
import SpecificCompanyDetail from './pages/SpecificCompanyDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact  component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={DashBoard} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/companies" exact component={Company} />

        {/* nested to be removed */}
        <Route path="/followedCompanies" exact component={FollowCompanies} />
        <Route path="/news" exact component={News} />
        <Route path="/specificCompany" exact component={SpecificCompanyDetail} />
      </Router>
    </div>
  );
}

export default App;
