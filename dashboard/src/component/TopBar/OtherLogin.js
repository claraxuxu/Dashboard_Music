import React from 'react';
import './TopBar.css';

export default function OtherLogin(props) {
    return (
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
    )
}