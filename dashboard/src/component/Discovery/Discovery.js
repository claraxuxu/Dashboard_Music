import React from 'react';
import './Discovery.css';
import Wiki from './Wiki/Wiki';
import Giphy from './Giphy/Giphy';

export default function Discovery() {
    return (
        <div className="container">
            <div className="wiki">
                <Wiki />
            </div>
            <div className="wiki">
                <Giphy />
            </div>
        </div>
    );
}