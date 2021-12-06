import React from 'react';
import './../../Board.css';
import './../Explore.css';
import Minus from './../../../../assets/minus.png';
import './../../../Api';
import './../../../config';

export default function HeaderWidget(props) {
	return (
		<div className="explore-inner">
			{props.i.feature === "song_rank" ?
				<h3 className="explore-title">Song rank - {props.i.params}</h3>
			: props.i.feature === "artist_stats" ?
				<h3 className="explore-title">Artist Info - {props.i.params}</h3>
			: props.i.feature === "newest_release" ?
				<h3 className="explore-title">Newest - {props.i.params}</h3>
			:
				<h3 className="explore-title">Best songs - {props.i.params}</h3>
			}
			<img
				className="minus-btn"
				src={Minus}
				alt="delete"
				onClick={() => props.del(props.i.id)}
			/>
		</div>
	);
}