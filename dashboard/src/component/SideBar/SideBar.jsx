import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';
import profileIcon from './../../assets/profile.png';
import MyIcon from './../../assets/myboard.png';
import HelpIcon from './../../assets/help.png';

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Platforms</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <img src={MyIcon} alt="soundcloud" className="sidebarIcon" />
                            MyBoard
                        </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Tools</h3>
                    <ul className="sidebarList">
                        <Link to="/help" className="link">
                        <li className="sidebarListItem">
                            <img src={HelpIcon} alt="spotify" className="sidebarIcon" />
                            Help
                        </li>
                        </Link>
                        <Link to="/discovery" className="link"> 
                        <li className="sidebarListItem">
                            <img src={require('./../../assets/discover.png').default} alt="Discovery" className="sidebarIcon" />
                            Discovery
                        </li>
                        </Link>
                        {global.in ? 
                            <Link to="/profile" className="link"> 
                            <li className="sidebarListItem">
                                <img src={profileIcon} alt="Profile" className="sidebarIcon" />
                                Profile
                            </li>
                            </Link>
                        : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}
