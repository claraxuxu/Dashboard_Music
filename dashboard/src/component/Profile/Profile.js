import React, { useState } from 'react';
import './Profile.css';
import ProfileB from './../../assets/profile_black.png';
import Calendar from './../../assets/calendar.png';
import Phone from './../../assets/phone.png';
import Location from './../../assets/location.png';

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
    const [userName, setUserName] = useState("user01");
    const [birth, setBirth] = useState("05.12.2021");
    const [loca, setLoca] = useState("Lyon, France");
    const [contact, setContact] = useState("00 00 00 00 00");

    const [userName1, setUserName1] = useState("User01");
    const [birth1, setBirth1] = useState("05.12.2021");
    const [loca1, setLoca1] = useState("Lyon, France");
    const [contact1, setContact1] = useState("00 00 00 00 00");

    const getInfos = async (e) => {
        e.preventDefault()
        console.log(global.username)
        try {
            const infos = await fetch(`http://127.0.0.1:8080/api/account?token=${global.mytoken.token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token
                }
            });
            const json_info = await infos.json();
            console.log(json_info)
        }
        catch(e) {
            console.log("ERROR")
        }
    };


    const handleChanges = (e) => {
        e.preventDefault()
        setUserName(userName1);
        setBirth(birth1);
        setLoca(loca1);
        setContact(contact1);
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
                        <Info i = {Calendar} title={birth} />
                        <span className="userShowTitle">Contact Details</span>
                        <Info i = {Phone} title={contact} />
                        <Info i = {Location} title={loca} />
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <InfoModif title="Username" valeur={userName} setvalue={setUserName1}/>
                            <InfoModif title="Birthday" valeur={birth} setvalue={setBirth1} />
                            <InfoModif title="Contact" valeur={contact} setvalue={setLoca1} />
                            <InfoModif title="Adresse" valeur={loca} setvalue={setContact1} />
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
                                <button className="userUpdateBtn" onClick={handleChanges}>
                                    Update
                                </button>
                                <button  className="userUpdateBtn" onClick={getInfos}>
                                    GET
                                </button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}