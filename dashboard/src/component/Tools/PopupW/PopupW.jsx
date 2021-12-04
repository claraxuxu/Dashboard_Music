import React, { useState } from 'react';
import './PopupW.css';
import Select from 'react-select';

export default function PopupW(props) {
    const [service, setService] = useState('Deezer');
    const [params, setP] = useState("");
    const [feature, setF] = useState("");

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn"
                onClick={() => props.setTrigger(false)}>
                    <img src={require('./../../../assets/close.png').default} alt="close" 
                        className="close-img" />
                </button>
                <div>
                    <label>Service</label>
                    <Select
                        defaultValue={global.Services[0]}
                        options={global.Services}
                        onChange={(e) => setService(e.value)}
                        className="selectStyle"
                    />
                    <p>{service}</p>
                    {(service === global.Services[0].value) ? 
                        <Select
                            defaultValue={global.Feature[0]}
                            options={global.Feature}
                            onChange={(e) => setF(e.value)}
                            className="selectStyle"
                        />
                    : null
                    }
                    <input
                        value={params}
                        onChange={e => setP(e.target.value)}
                        className="inputParams">
                    </input>
                    <p>{service}{params}{feature}</p>
                    <button
                        onClick={() => props.create(service, params, feature)}
                    >Create</button>
                </div>
            </div>

        </div>
    ) : "";
}