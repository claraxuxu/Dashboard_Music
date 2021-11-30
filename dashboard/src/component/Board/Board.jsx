import React, { useState } from 'react';
import './Board.css';
import Popup from '../Tools/Popup/Popup';
import Explore from './Explore/Explore';

export default function Board() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="spo-container">
			<Explore />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>

        </div>
    )
}
