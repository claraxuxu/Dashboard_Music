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

// function Rows(props) {
//     return (
//         <div className="row">
//             <img className="icon"
//                 src={props.imgsrc}
//                 alt={props.title}
//             />
//             <text className="options">{props.title}</text>
//         </div>
//     )
// }

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
              <Route path="/setting">
                <Setting />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;