import React from 'react';
import './Popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn"
                onClick={() => props.setTrigger(false)}>
                    <img src={require('./../../../assets/close.png').default} alt="close" 
                        className="close-img" />
                </button>
                { props.children }
            </div>

        </div>
    ) : "";
}

export default Popup
