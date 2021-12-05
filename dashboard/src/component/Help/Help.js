import React from 'react';
import './Help.css';

export default function Help(props) {

    return (
        <div className="ac-container">
            <h1>Help</h1>
            <p className="ac-intro">Hi, welcome to ClacBoard, this is a music dashboard, you could add different type of <br/>
            cards as you want in our 'MyBoard' domaine.</p>
            <div className="example-box">
                <img
                    src={require('./../../assets/example-board.png').default}
                    alt="example1"
                    className="example-img"
                />
                <div>
                    <p>👉 With the '+' add button, you could choose the type of card to add</p>
                    <p>👉 And then, follow the second arrow, you could delete the card as you want</p>
                    <p>👉 The third arrow is for giving you a chance to change the artist if you'd change your mind</p>
                    <p>👉 Hope you enjoy the services</p>
                </div>
            </div>
            <div className="example-box">
                <img
                    src={require('./../../assets/server_icons.png').default}
                    alt="example1"
                    className="example-img"
                />
                <div>
                    <p>👉 We have three services in total</p>
                    <p>👉 Deezer  -  a French online music streaming service. </p>
                    <p>👉 Napster  -  an audio streaming service provider owned by MelodyVR. </p>
                    <p>👉 Itunes  -   a media player, media library, Internet radio broadcaster, mobile device management utility, and the client app for the iTunes Store, developed by Apple Inc. </p>
                </div>
            </div>
            <p className="ac-intro"><br/>After these professionnal audio services, we have also something 
            for fun without log in our dashboard.</p>
            <div className="example-box">
                <img
                    src={require('./../../assets/discover_icons.png').default}
                    alt="example1"
                    className="example-img"
                />
                <div>
                    <p>👉 We have two 'discovery' toys to search something interesting</p>
                    <p>👉 Wikipedia  -  a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system. </p>
                    <p>👉 Giphy  -    is an American online database and search engine that allows users to search for and share short looping videos with no sound, that resemble animated GIF files.  </p>
                    <p>👉 Every search you make, we will give you the top 10 - 20 results directlt </p>
                </div>
            </div>
            <p className="ac-intro"><br/>That's all for introduce our dashboard, hope you enjoy it!</p>
        </div>
    )
}
