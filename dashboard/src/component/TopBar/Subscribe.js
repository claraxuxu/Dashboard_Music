import React, { useState } from 'react';
import OtherLogin from './OtherLogin';
import './TopBar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../Api';

export default function Subscribe(props) {
    const [userName, setUsername] = useState("")
    const [pwd, setPwd] = useState("")

    const subscribe = async () => {
        try {
            const creat_user = await fetch(`${global.api.GetInfo}?username=${userName}&password=${pwd}`, {
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

    return (
        <div className="loginContainer">
            <OtherLogin />
            <p style={{textAlign:'center', margin:0, padding:0}}>-- or --</p>
            <div>
                <label style={{textAlign:'left'}}>Username</label>
                <input
                    type="text"
                    value={userName}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label>PassWord</label>
                <input
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                ></input>
                <button 
                onClick={subscribe}
                className="btnContainer"
                >Sign Up</button>
            </div>
        </div>
    )
}