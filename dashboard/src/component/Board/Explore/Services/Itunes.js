import React from 'react';
import './../../Board.css';
import './../Explore.css';
import './../../../config';

export default function Itunes(props) {
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
            <div className="scroll-box">
                {props.i.data.map((item, index) => {
                    return (
                        <div className="rank-box">
                            <p className="rank-i">{index}</p>
                            <p className="rank-t">{item.title} - {item.album}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}