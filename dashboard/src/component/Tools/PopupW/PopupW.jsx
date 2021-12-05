import React, { useState } from 'react';
import './PopupW.css';
import Select from 'react-select';

export default function PopupW(props) {
    const [service, setService] = useState('Deezer');
    const [params, setP] = useState("");
    const [feature, setF] = useState("");

    return (props.trigger) ? (
        <div className="popupw">
            <div className="popupw-inner">
                <button className="close-btn"
                onClick={() => props.setTrigger(false)}>
                    <img src={require('./../../../assets/close.png').default} alt="close" 
                        className="close-img" />
                </button>
                <div className="Select-box">
                    <div className="select-container">
                        <label className="labels">Service</label>
                        <Select
                            defaultValue={global.Services[0]}
                            options={global.Services}
                            onChange={(e) => setService(e.value)}
                            className="selectStyle"
                        />
                        {(service === global.Services[0].value) ? 
                            <div>
                                <label className="labels">Feature</label>
                                <Select
                                    defaultValue={global.Feature[0]}
                                    options={global.Feature}
                                    onChange={(e) => setF(e.value)}
                                    className="selectStyle"
                                />
                            </div>
                        : null
                        }
                        <label className="labels">Signer</label>
                        <input
                            value={params}
                            onChange={e => setP(e.target.value)}
                            className="inputParams">
                        </input>
                    </div>
                    <div className="Type-chosen">
                        <button
                            onClick={() => props.create(service, params, feature)}
                            className="create-btn"
                        >Create</button>
                    </div>
                </div>
            </div>

        </div>
    ) : "";
}

// --openssl-legacy-provider