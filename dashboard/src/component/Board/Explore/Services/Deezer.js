import React, { useState } from 'react';
import './../../Board.css';
import './../Explore.css';
import './../../../config';
import TextInfo from './../Tools/TextInfo';

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
                        <TextInfo title="Service:" detail="Deezer" />
                        <TextInfo title="Artiste:" detail={props.i.params} />
                        <TextInfo title="Release date:" detail={props.d} />
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
                            <TextInfo title="Service:" detail="Deezer" />
                            <TextInfo title="Album:" detail={props.i.data.title} />
                            <TextInfo title="Rank:" detail={props.i.data.rank} />
                        </div>
                </div>
            : props.i.feature === 'best_songs' ?
                <div>
                    <div className="scroll-box">
                        {props.i.data.map((item, index) => {
                            return (
                                <div className="rank-box">
                                    <p className="rank-i">{index + 1}</p>
                                    <p className="rank-t">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                    <TextInfo title="Service:" detail="Deezer" />
                </div>
            :
                <div className="Info-box">
                    <img
                        src={props.i.data.cover}
                        alt="albumimg"
                        className="Album-img"
                    />
                    <div className="Infos_deezer">
                        <TextInfo title="Service:" detail="Deezer" />
                        <TextInfo title="Album:" detail={props.i.data.nb_album} />
                        <TextInfo title="Fans:" detail={props.i.data.nb_fan} />
                    </div>
                </div>
            }
        </div>
    );
}