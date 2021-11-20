import React, { useState } from 'react';
import './Spotify.css';
import Popup from '../Tools/Popup/Popup';
import Explore from './Explore/Explore';
import Following  from './Following/Following';

export default function Spotify() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="spo-container">
			<Explore />
            <Following />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>

        </div>
    )
}
