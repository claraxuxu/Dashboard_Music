import React, { useState } from 'react';
import OtherLogin from './OtherLogin';
import './TopBar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function Signin(props) {
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")

    const getUser = async () => {
        try {
            global.username = username;
            global.pwd = pwd;
            const token_user = await fetch(`http://127.0.0.1:8080/api/account?username=${username}&password=${pwd}`, {
                method: 'GET',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            global.mytoken = await token_user.json();
            console.log(global.mytoken);
            if (global.mytoken.token) {
                toast('Welcome to ClacBoard');
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