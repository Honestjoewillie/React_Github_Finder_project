import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Alert from "./Components/layout/Alert";
import About from "./Components/Pages/About";
import User from "./Components/users/User";
import GithubState from "./Context/GitHub/GithubState";
import AlertState from "./Context/alert/Alertstate";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import "./App.css";
//import { async } from "q";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
