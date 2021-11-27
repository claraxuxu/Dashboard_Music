import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';
import spotifyIcon from './../../assets/spotify.png';
import profileIcon from './../../assets/profile.png';
import youtubeIcon from './../../assets/youtube.png';
import soundIcon from './../../assets/soundcloud.png';

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Platforms</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <img src={spotifyIcon} alt="spotify" className="sidebarIcon" />
                            Spotify
                        </li>
                        </Link>
                        <Link to="/youtube" className="link"> 
                        <li to="/youtube" className="sidebarListItem">
                            <img src={youtubeIcon} alt="youtube" className="sidebarIcon" />
                            Youtube
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <img src={soundIcon} alt="soundcloud" className="sidebarIcon" />
                            SoundCloud
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Tools</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <img src={require('./../../assets/discover.png').default} alt="Discovery" className="sidebarIcon" />
                            Discovery
                        </li>
                        <Link to="/profile" className="link"> 
                        <li className="sidebarListItem">
                            <img src={profileIcon} alt="Profile" className="sidebarIcon" />
                            Profile
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <img src={require('./../../assets/setting.png').default} alt="Settings" className="sidebarIcon" />
                            Settings
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
