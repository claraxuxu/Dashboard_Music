import React, { useState } from 'react';
import './TopBar.css';
import Popup from '../Tools/Popup/Popup';

function Sign(props) {
    return (
        <div className="loginContainer">
            <div className="other-login">
                <button className="other-inner">
                    <img
                        src={require('./../../assets/google_logo.png').default}
                        alt="google"
                        className="other-logo"
                    />
                    Sign in with Google
                </button>

                <button className="other-inner">
                    <img
                        src={require('./../../assets/twitter_logo.png').default}
                        alt="twitter"
                        className="other-logo"
                    />
                    Sign in with Twitter
                </button>
            </div>
            <p style={{textAlign:'center', margin:0, padding:0}}>-- or --</p>
            <div>
                <label style={{textAlign:'left'}}>Username</label>
                <input
                    type="text"
                    value={props.name}
                    autoFocus
                    onChange={(e) => props.setName(e.target.value)}
                ></input>
                <label>PassWord</label>
                <input
                    value={props.pw}
                    onChange={e => props.setPw(e.target.value)}
                ></input>
                <button className="btnContainer">Sign Up</button>
                <p style={{textAlign:'center'}}>Already have an account? <span>Sign In</span></p>
            </div>
        </div>
    )
}

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
                <Sign name={username} setName={setUsername} pw={pwd} setPw={setPwd} />
            </Popup>

            <Popup trigger={btnIn} setTrigger={setBtnIn}>
                <Sign name={username} setName={setUsername} pw={pwd} setPw={setPwd} />
            </Popup>
        </div>
    )
}