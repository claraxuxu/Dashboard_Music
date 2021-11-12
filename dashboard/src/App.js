import './App.css';
import React from 'react';
import TopBar from './component/TopBar/TopBar';
import SideBar from './component/SideBar/SideBar';

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
    <div className="content">
        <TopBar />
        <div className="container">
            <SideBar />
            <div className="Other">
                otherpages

            </div>
        </div>
    </div>
  );
}

export default App;