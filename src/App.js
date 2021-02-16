import './App.css';
import Login from './Components/login/Login';
import {BrowserRouter as Router, Route , Link  } from "react-router-dom";
import SignUp from './Components/signUp/SignUp';
import DashBoard from './Components/dashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact  component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={DashBoard} />
      </Router>
    </div>
  );
}

export default App;
