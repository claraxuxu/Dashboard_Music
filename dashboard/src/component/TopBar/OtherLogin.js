import React from 'react';
import './TopBar.css';
import { GoogleLogin } from 'react-google-login';
import {toast} from 'react-toastify'

export default function OtherLogin(props) {
    const id = "132511071634-tredgcl1fgasbc8e9s30vb83i37lj199.apps.googleusercontent.com";

    const getWidgets = async () => {
        try {
            const infos = await fetch(global.api.GetWidget, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token,
                }
            });
            const json_info = await infos.json();
			props.setW(json_info.widgets);
        }
        catch(e) { console.log(e) }
    }

    const getUserInfo = async () => {
        try {
            const infos = await fetch(global.api.GetInfo, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token,
                }
            });
            const json_info = await infos.json();
            console.log(json_info.username)
            global.username = json_info.username;
            global.pwd = json_info.password;
            global.email = json_info.email;
            global.phone = json_info.phone_number
        }
        catch(e) { console.log(e) }
    }

    const getUser = async (name, pwd) => {
        try {
            global.in = false;
            const token_user = await fetch(`${global.api.GetInfo}?username=${name}&password=${pwd}`, {
                method: 'GET',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            global.mytoken = await token_user.json();
            if (global.mytoken.token) {
                toast('Welcome to ClacBoard');
                global.in = true;
                localStorage.setItem('In', true);
                getUserInfo();
                getWidgets();
                props.setTrigger(false);
            }
        }
        catch(e) { console.log(e) }
    };

    const onLoginSuccess = (res) => {
        console.log("Login Success: ", res.profileObj.email);
        getUser(res.profileObj.name, res.profileObj.givenName);
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