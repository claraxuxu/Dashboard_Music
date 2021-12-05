import React from 'react';
import './TopBar.css';
import { GoogleLogin } from 'react-google-login';

export default function OtherLogin(props) {
    const id = "132511071634-tredgcl1fgasbc8e9s30vb83i37lj199.apps.googleusercontent.com";

    const onLoginSuccess = (res) => {
        console.log("Login Success: ", res.profileObj);
    }

    const onLoginFail = (res) => {
        console.log("FAIL: ", res)
    }

    return (
        <div className="other-login">
            <GoogleLogin
                clientId={id}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFail}
                cookiePolicy={'single_host_origin'}
                className="other-inner"
            />
        </div>
    )
}