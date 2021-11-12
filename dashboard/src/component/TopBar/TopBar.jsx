import React from 'react';
import './TopBar.css';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={require('./../../assets/logo.png').default} alt="Logo" width="40" height="40" margin-right="10px" />
                    <span className="logo">ClacBoard</span>
                </div>
                <div className="topRight">
                    <button className="Up">
                        SUBSCRIBE
                    </button>
                    <button className="In">
                        SIGN IN
                    </button>
                </div>
            </div>

        </div>
    )
}