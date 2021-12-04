import React, { useState } from 'react';
import './Profile.css';
import './../TopBar/Signin';
import ProfileB from './../../assets/profile_black.png';
import Emaili from './../../assets/email.png';
import Phone from './../../assets/phone.png';
import Lock from './../../assets/lock.png';
import './../Api';

function Info(props) {
    return (
        <div className="userShowInfo">
            <img src={props.i}
            alt="profileDetail"
            className="userShowIcon"
            />
            <span className="userShowInfoTitle">{props.title}</span>
        </div>
    );
}

function InfoModif(props) {
    return (
        <div className="userUpdateItem">
            <label>{props.title}</label>
            <input type="text"
            placeholder={props.valeur}
            className="userUpdateInput"
            onChange={e => props.setvalue(e.target.value)}
            />
        </div>
    );
}

export default function Profile() {
    const u = JSON.parse(JSON.stringify(global.username, null));
    const e = JSON.parse(JSON.stringify(global.email, null));
    const p = JSON.parse(JSON.stringify(global.pwd, null));
    const ph = JSON.parse(JSON.stringify(global.phone, null));
    const [userName, setUserName] = useState(u);
    const [Email, setEmail] = useState(e);
    const [Pwd, setPwd] = useState(p);
    const [phone, setPhone] = useState(ph);

    const changeInfo = (e) => {
        e.preventDefault();
        console.log(JSON.parse(JSON.stringify(global.username, null)));
        setUserName(userName);
        setEmail(Email);
        setPwd(Pwd);
        setPhone(phone);
        EditProfile();
    }

    const EditProfile = async () => {
        try {
            const infos = await fetch(`${global.api.GetInfo}?email=${Email}&username=${userName}&password=${Pwd}&phone_number=${phone}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token
                }
            });
            const json_info = await infos.json();
            console.log(json_info)
        }
        catch(e) {console.log(e)}
    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">Edit Profile</h2>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={require('./../../assets/user.png').default}
                            className="userShowImg"
                            alt="userImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Clara Clac</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <Info i = {ProfileB} title={userName} />
                        <Info i = {Lock} title={Pwd} />
                        <span className="userShowTitle">Contact Details</span>
                        <Info i = {Emaili} title={Email} />
                        <Info i = {Phone} title={phone} />
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <InfoModif title="Username" valeur={userName} setvalue={setUserName}/>
                            <InfoModif title="Password" valeur={Pwd} setvalue={setPwd} />
                            <InfoModif title="Email" valeur={Email} setvalue={setEmail} />
                            <InfoModif title="Phone Number" valeur={phone} setvalue={setPhone} />
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src={require('./../../assets/user.png').default}
                                    alt="pp"
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <img
                                        src={require('./../../assets/upload.png').default}
                                        alt="upload"
                                        className="userUpdateIcon"
                                    />
                                </label>
                                <input type="file" id="file" style={{display: "none" }} />
                            </div>
                            <form>
                                <button className="userUpdateBtn" onClick={changeInfo}>
                                    Update
                                </button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}