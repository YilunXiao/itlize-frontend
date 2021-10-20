import logo from './logo.svg';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <NavBar/>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/resources">
                <Resources />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
