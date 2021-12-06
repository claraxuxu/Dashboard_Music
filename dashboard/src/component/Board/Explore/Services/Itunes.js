import React from 'react';
import './../../Board.css';
import './../Explore.css';
import './../../../config';
import TextInfo from '../Tools/TextInfo';

export default function Itunes(props) {
    return (
        <div className="deezer-container">
            <div className="update-box">
                <input
                    value={props.params}
                    onChange={e => props.setP(e.target.value, props.i.id)}
                    className="inputParams">
                </input>
                <button className="update-btn">Update</button>
            </div>
            <div className="scroll-box">
                {props.i.data.map((item, index) => {
                    return (
                        <div className="rank-box">
                            <p className="rank-i">{index + 1}</p>
                            <p className="rank-t">{item.title} - {item.album}</p>
                        </div>
                    )
                })}
            </div>
            <TextInfo title="Service:" detail="Itunes" />
        </div>
    );
}