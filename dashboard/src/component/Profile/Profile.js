import React from 'react';
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

export default function Profile() {
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
                            <span className="userShowUserTitle">Mobile app dev</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <Info i = {ProfileB} title="Clara XUXU" />
                        <Info i = {Calendar} title="01.12.1998" />
                        <span className="userShowTitle">Contact Details</span>
                        <Info i = {Phone} title="00 00 00 00 00" />
                        <Info i = {Location} title="Lyon, France" />
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                placeholder="Clara XUXU"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Contact</label>
                                <input type="text"
                                placeholder="00 00 00 00 00"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adresse</label>
                                <input type="text"
                                placeholder="Lyon, France"
                                className="userUpdateInput" />
                            </div>
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
                            <button className="userUpdateBtn">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}