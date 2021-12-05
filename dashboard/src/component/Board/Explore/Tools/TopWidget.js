import React from 'react';
import './../../Board.css';
import './../Explore.css';
import Plus from './../../../../assets/plus.png';
import './../../../Api';
import './../../../config';

export default function TopWidget(props) {
	return (
		<div className="ex-title-bar">
			<h2 className="title-name">MyBoard</h2>
			<button className="plus-btn"
				onClick={() => props.setPop(true)}>
				<img
					className="plus-img"
					src={Plus}
					alt="plus"
				/>
			</button>
		</div>
	);
}