import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './component/TopBar/TopBar';
import SideBar from './component/SideBar/SideBar';
import Board from './component/Board/Board';
import Profile from './component/Profile/Profile';
import Discovery from './component/Discovery/Discovery';

function App() {
  return (
    <Router>
        <TopBar />
        <div className="container">
            <SideBar />
            <Switch>
              <Route exact path="/">
                <Board />
              </Route>
              <Route path="/discovery">
                <Discovery />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;