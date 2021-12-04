import React, { useState } from 'react';
import './TopBar.css';
import Popup from '../Tools/Popup/Popup';
import Signin from './Signin';
import { Link } from "react-router-dom";
import Subscribe from './Subscribe';

export default function TopBar(props) {
    const [btnUp, setBtnUp] = useState(false)
    const [btnIn, setBtnIn] = useState(false)

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={require('./../../assets/logo.png').default} alt="Logo" width="40" height="40" margin-right="10px" />
                    <span className="logo">ClacBoard</span>
                </div>
                {global.in === true ? 
                <div className="topRight">
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                    <img
                        src={require('../../assets/user.png').default}
                        alt="profile_photo"
                        className="Top-pp"
                    />
                    </Link>
                    <label className="Top-Username">{global.username}</label>
                </div>
                :
                <div className="topRight">
                    <button className="Up"
                    onClick={() => setBtnUp(true)}>
                        SUBSCRIBE
                    </button>
                    <button className="In"
                    onClick={() => setBtnIn(true)}>
                        SIGN IN
                    </button>
                </div>
                }
            </div>
            <Popup trigger={btnUp} setTrigger={setBtnUp}>
                <Subscribe trigger={btnUp} setTrigger={setBtnUp}/>
            </Popup>

            <Popup trigger={btnIn} setTrigger={setBtnIn}>
                <Signin trigger={btnIn} setTrigger={setBtnIn} setW={props.setW}/>
            </Popup>
        </div>
    )
}