import React from 'react';

export default function TextInfo(props) {
    return (
        <div className="textinfo-container">
            <p className="Info_Title">{props.title}</p>
            <p className="Info_Detail">{props.detail}</p>
        </div>
    );
}
