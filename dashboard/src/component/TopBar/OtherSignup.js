import React from 'react';
import './TopBar.css';
import { GoogleLogin } from 'react-google-login';
import {toast} from 'react-toastify';

export default function OtherSignup(props) {
    const id = "132511071634-tredgcl1fgasbc8e9s30vb83i37lj199.apps.googleusercontent.com";

    const subscribe = async (name, pwd) => {
        try {
            const creat_user = await fetch(`${global.api.GetInfo}?username=${name}&password=${pwd}`, {
                method: 'POST'
            });
            global.new_user = await creat_user.json();
            if (global.new_user.token) {
                toast('Sign Up Succeed!');
                toast('Click Sign In to Log please!');
                props.setTrigger(false);
            } 
        }
        catch(e) {
            console.log(e)
        }
    };

    const onLoginSuccess = (res) => {
        console.log("Login Success: ", res.profileObj);
        subscribe(res.profileObj.name, res.profileObj.givenName);
    }

    const onLoginFail = (res) => {
        console.log("FAIL: ", res)
    }

    return (
        <div className="other-login">
            <GoogleLogin
                clientId={id}
                buttonText="Sign Up with Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFail}
                cookiePolicy={'single_host_origin'}
                className="other-inner"
            />
        </div>
    )
}