import React, { useState } from 'react';
import './TopBar.css';
import Popup from '../Tools/Popup/Popup';
import Signin from './Signin';
import Subscribe from './Subscribe';

export default function TopBar() {
    const [btnUp, setBtnUp] = useState(false)
    const [btnIn, setBtnIn] = useState(false)
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={require('./../../assets/logo.png').default} alt="Logo" width="40" height="40" margin-right="10px" />
                    <span className="logo">ClacBoard</span>
                </div>
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
            </div>
            <Popup trigger={btnUp} setTrigger={setBtnUp}>
                <Subscribe name={username} setName={setUsername} pw={pwd} setPw={setPwd} />
            </Popup>

            <Popup trigger={btnIn} setTrigger={setBtnIn}>
                <Signin name={username} setName={setUsername} pw={pwd} setPw={setPwd} />
            </Popup>
        </div>
    )
}