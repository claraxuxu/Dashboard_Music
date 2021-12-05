import React, { useState } from 'react';
import './Board.css';
import Popup from '../Tools/Popup/Popup';
import Explore from './Explore/Explore';

export default function Board(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="spo-container">
			<Explore  setW={props.setW} w={props.w}/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>

        </div>
    )
}
