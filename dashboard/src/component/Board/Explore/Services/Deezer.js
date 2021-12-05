import React, { useState } from 'react';
import './../../Board.css';
import './../Explore.css';
import './../../../config';

export default function Deezer(props) {
    const [para, setPara] = useState("");

    return (
        <div className="deezer-container">
            <div className="update-box">
                <input
                    value={para}
                    onChange={e => setPara(e.target.value)}
                    className="inputParams">
                </input>
                <button
                    className="update-btn"
                    onClick={() => props.fe(para, props.i.id)}
                >
                Update
                </button>
            </div>
            {props.i.feature === "newest_release" ?
                <div className="Info-box">
                    <img
                        src={props.link}
                        alt="albumimg"
                        className="Album-img"
                    />
                    <div className="Infos_deezer">
                        <p className="Infos_Detail">Service: Deezer</p>
                        <p className="Infos_Detail">Artiste: {props.i.params}</p>
                        <p className="Infos_Detail">Release date: {props.d}</p>
                    </div>
                </div>
            : props.i.feature === 'song_rank' ? 
                <div className="Info-box">
                        <img
                            src={props.link}
                            alt="albumimg"
                            className="Album-img"
                        />
                        <div className="Infos_deezer">
                            <p className="Infos_Detail">Service: Deezer</p>
                            <p className="Infos_Detail">Artiste: {props.i.params}</p>
                        </div>
                </div>
            : props.i.feature === 'best_songs' ?
                <div className="scroll-box">
                    {props.i.data.map((item, index) => {
                        return (
                            <div className="rank-box">
                                <p className="rank-i">{index}</p>
                                <p className="rank-t">{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            :
                <div className="Info-box">
                    <img
                        src={props.i.data.cover}
                        alt="albumimg"
                        className="Album-img"
                    />
                    <div className="Infos_deezer">
                        <p className="Infos_Detail">Album: {props.i.data.nb_album}</p>
                        <p className="Infos_Detail">Fans: {props.i.data.nb_fan}</p>
                    </div>
                </div>
            }
        </div>
    );
}