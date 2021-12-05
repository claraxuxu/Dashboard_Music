import './App.css';
import React, { useState } from 'react';
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
import Help from './component/Help/Help';

function App() {
  const [Widget, setWidget] = useState();

  return (
    <Router>
        <TopBar setW={setWidget}/>
        <div className="container">
            <SideBar />
            <Switch>
              <Route exact path="/">
                <Board w={Widget} setW={setWidget}/>
              </Route>
              <Route exact path="/help">
                <Help />
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