import React, { useState } from 'react';
import './Youtube.css';
import Popup from '../Tools/Popup/Popup';

export default function Youtube() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="container">
            <div className="title-bar">
                <h3 className="title-name">Youtube</h3>
                <button className="plus-btn"
                    onClick={() => setButtonPopup(true)}
                >
                    <img 
                        className="plus-img" 
                        src={require('./../../assets/plus.png').default}
                        alt="plus"
                    />
                </button>
            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>here</h3>
                <p>this is the place to add widget</p>
            </Popup>

        </div>
    )
}
