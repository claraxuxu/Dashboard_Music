import React, { useState } from 'react';
import '../Board.css';
import './Explore.css';
import Select from 'react-select';
import Clocks from './../../Discovery/Clock/Clocks';

export default function Explore() {
	const [title, setTitle] = useState([]);
	const types = [
		{value: 'Napster', label: 'Napster'},
		{value: 'Deezer', label: 'Deezer'},
		{value: 'nom', label: 'nom'},
		{value: 'Clock', label: 'Clock'},
	]
	const spotifys = [
		{value: 'Best', label: 'Best'},
		{value: 'Most Popular', label: 'Most Popular'},
		{value: 'Random', label: 'Random'},
	]

	const width = window.innerWidth;

	function addExplore(t) {
		setTitle([...title, {
			title: t,
			id: title.length,
			type: "Deezer"
		}]
		)
	};

	function delExplore(index1) {
		const list_tmp = title.filter((item) => item.id !== index1);
		setTitle(list_tmp)
	};

	function handleChangeType(value, id) {
		title[id].type = value.label;
		setTitle([...title]);
	};

	return (
		<div className="col_container">
			<div className="ex-title-bar">
				<h2 className="title-name">Accueil</h2>
				<button className="plus-btn"
					onClick={() => addExplore("hello world")}>
					<img
						className="plus-img"
						src={require('./../../../assets/plus.png').default}
						alt="plus"
					/>
				</button>
			</div>
			<div className="widget-main" style={{ width: width / 6 * 5 }}>
				{
					title.map((item, index) => {
					if (item.type === types[0].value) {
							return (
								<div className="explore-content" key={index}>
									<div className="beside-img">
										<div className="explore-inner">
											<h3 className="explore-title">{item.type}</h3>
											<img
												className="minus-btn"
												src={require('../../../assets/minus.png').default}
												alt="delete"
												onClick={() => delExplore(item.id)}
											/>
										</div>
										<div className="play-bar">
											<div className="choose">
												<Select
													defaultValue={types[0]}
													options={types}
													onChange={(e) => handleChangeType(e, item.id)}
													className="selectStyle"
												/>
												<Select
													defaultValue={spotifys[0]}
													options={spotifys}
													onChange={(e) => handleChangeType(e, item.id)}
													className="selectStyle"
												/>
											</div>
											<img
												src={require('./../../../assets/play.png').default}
												alt="play"
												className="playBtn"
											/>
										</div>
									</div>
								</div>
							)
					} else if (item.type === types[2].value){
						return (
							<div className="explore-content" key={index}>
								<div className="beside-img">
									<div className="explore-inner">
										<h3 className="explore-title">{item.type}</h3>
										<img
											className="minus-btn"
											src={require('../../../assets/minus.png').default}
											alt="delete"
											onClick={() => delExplore(item.id)}
										/>
									</div>
									<div className="play-bar">
										<div className="choose">
											<Select
												defaultValue={types[0]}
												options={types}
												onChange={(e) => handleChangeType(e, item.id)}
												className="selectStyle"
											/>
										</div>
										<Clocks />
									</div>
								</div>
							</div>
						)
					} else {
						return (
							<p>RIEN</p>
						)
					}
					})
				}
			</div>
		</div>
	)
}