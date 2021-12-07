import React, { useState } from 'react';
import './../../Board.css';
import './../Explore.css';
import './../../../config';
import TextInfo from '../Tools/TextInfo';

export default function Napster(props) {
    const [para, setPara] = useState("");

    return (
        <div className="deezer-container">
            <div className="update-box">
                <input
                    value={props.params}
                    onChange={e => setPara(e.target.value)}
                    className="inputParams">
                </input>
                <button
                    className="update-btn"
                    onClick={() => props.fe(para, props.i.id)}
                >Update</button>
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
            <TextInfo title="Service:" detail="Napster" />
        </div>
    );
}