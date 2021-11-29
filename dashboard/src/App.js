import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './component/TopBar/TopBar';
import SideBar from './component/SideBar/SideBar';
import Spotify from './component/Spotify/Spotify';
import Youtube from './component/Youtube/Youtube';
import Setting from './component/Settings/Setting';
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
                <Spotify />
              </Route>
              <Route path="/youtube">
                <Youtube />
              </Route>
              <Route path="/discovery">
                <Discovery />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/setting">
                <Setting />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;