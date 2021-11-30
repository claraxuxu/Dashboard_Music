import React, {useState} from 'react';
import './Clock.css';
import Clock from 'react-live-clock';
import Select from 'react-select';

export default function Clocks() {
    const [selectedOption, setSelectedOption] = useState("Europe/Paris");
    const options = [
        {value: 'Asia/Shanghai', label: 'China' },
        {value: 'Europe/Paris', label: 'France' },
        {value: 'US/Pacific', label: 'America' },
        {value: 'Europe/Rome', label: 'Italy' },
        {value: 'Japan', label: 'Japan' },
        {value: 'Asia/Seoul', label: 'Korea' },
        {value: 'Canada/Eastern', label: 'Canada' },
    ]

    function handleChangeTime(value) {
        setSelectedOption(value.value)
    }

    return (
        <div className="clo-container">
            <h3>China</h3>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={selectedOption} />
            <Select 
                options={options}
                onChange={handleChangeTime}
            />
        </div>
    );
}