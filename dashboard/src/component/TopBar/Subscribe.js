import React from 'react';
import OtherLogin from './OtherLogin';
import './TopBar.css';

export default function Subscribe(props) {
    return (
        <div className="loginContainer">
            <OtherLogin />
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
            </div>
        </div>
    )
}