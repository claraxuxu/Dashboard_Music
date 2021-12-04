import React from 'react';
import '../Board.css';
import './Explore.css';
import Select from 'react-select';
import Clocks from './../../Discovery/Clock/Clocks';
import './../../config';

export default function Clockf(props) {
    return (
        <div>
            <div className="choose">
                <Select
                    defaultValue={global.Services[0]}
                    options={global.Services}
                    onChange={(e) => props.on(e, props.id)}
                    className="selectStyle"
                />
            </div>
            <Clocks />
        </div>
    );
}