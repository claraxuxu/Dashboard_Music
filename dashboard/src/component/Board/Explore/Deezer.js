import React from 'react';
import '../Board.css';
import './Explore.css';
import Select from 'react-select';
import PlayIcon from './../../../assets/play.png';
import './../../config';

export default function Deezer(props) {
    return (
        <div className="deezer-container">
            <div className="update-box">
                <input
                    value={props.params}
                    onChange={e => props.setP(e.target.value, props.i.id)}
                    className="inputParams">
                </input>
                <button className="update-btn">UPDATE</button>
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
                        if (index < 6) {
                            return (
                                <div className="rank-box">
                                    <p className="rank-i">{index}</p>
                                    <p className="rank-t">{item.title}</p>
                                </div>
                            )
                        }
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