import React from 'react'
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
                        <li className="sidebarListItem active">
                            <img src={spotifyIcon} alt="spotify" className="sidebarIcon" />
                            Spotify
                        </li>
                        <li className="sidebarListItem">
                            <img src={youtubeIcon} alt="youtube" className="sidebarIcon" />
                            Youtube
                        </li>
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
                        <li to='/' li className="sidebarListItem">
                            <img src={profileIcon} alt="Profile" className="sidebarIcon" />
                            Profile
                        </li>
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
