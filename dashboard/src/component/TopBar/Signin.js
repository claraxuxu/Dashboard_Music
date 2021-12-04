import React, { useState } from 'react';
import OtherLogin from './OtherLogin';
import './TopBar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AsyncLocalStorage from '@createnextapp/async-local-storage'
import './../Api';

toast.configure()
export default function Signin(props) {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

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
            // await AsyncLocalStorage.setItem('Widget', json_info.widgets);
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

    const getUser = async () => {
        try {
            global.in = false;
            const token_user = await fetch(`${global.api.GetInfo}?username=${username}&password=${pwd}`, {
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

    return (
        <div className="loginContainer">
            <OtherLogin />
            <p style={{textAlign:'center', margin:0, padding:0}}>-- or --</p>
            <div>
                <label style={{textAlign:'left'}}>Username</label>
                <input
                    type="text"
                    value={username}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label>PassWord</label>
                <input
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                ></input>
                <button
                className="btnContainer"
                onClick={getUser}
                >Sign In</button>
            </div>
        </div>
    )
}