import React from 'react';
import '../Board.css';
import './Explore.css';
import Select from 'react-select';
import './../../config';

export default function Deezer(props) {
    return (
        <div>
            <div className="choose">
                <Select
                    defaultValue={global.Services[0]}
                    options={global.Services}
                    onChange={(e) => props.on(e, props.id)}
                    className="selectStyle"
                />
                <Select
                    defaultValue={global.Feature[0]}
                    options={global.Feature}
                    onChange={(e) => props.on(e, props.id)}
                    className="selectStyle"
                />
            </div>
            <input
                value={props.params}
                onChange={e => props.setP(e.target.value, props.id)}
                className="inputParams">
            </input>
            <button>UPDATE</button>
            <div className="Info-box">
                <img
                    src={props.link}
                    alt="albumimg"
                    className="Album-img"
                />
                <div className="Infos_deezer">
                    <p className="Infos_Detail">Service: Deezer</p>
                    <p className="Infosail">Artiste: {props.params}</p>
                    <p className="Infos_Detail">Release date: {props.d}</p>
                </div>
            </div>
            <img
                src={require('./../../../assets/play.png').default}
                alt="play"
                className="playBtn"
            />
        </div>
    );
}