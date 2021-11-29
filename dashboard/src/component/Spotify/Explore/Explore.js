import React, { useState } from 'react';
import './../Spotify.css';
import './Explore.css';

export default function Explore() {
	const [title, setTitle] = useState([])

	const width = window.innerWidth;

	function addExplore(t) {
		setTitle([...title, {
			title: t,
			id: title.length
		}]
		)
	};

	function delExplore(index1) {
		const list_tmp = title.filter((item) => item.id !== index1);
		setTitle(list_tmp)
	};

	return (
		<div className="col_container">
			<div className="title-bar">
				<h2 className="title-name">Explore</h2>
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
						return (
							<div className="explore-content" key={index}>
								<img
									className="explore_albumImg"
									src={require('../../../assets/album_img.png').default}
									alt="album"
								/>
								<div className="beside-img">
									<div className="explore-inner">
										<h3 className="explore-title">{item.title}{item.id}</h3>
										<img
											className="minus-btn"
											src={require('../../../assets/minus.png').default}
											alt="delete"
											onClick={() => delExplore(item.id)}
										/>
									</div>
									<div className="play-bar">
										<img
											src={require('./../../../assets/play.png').default}
											alt="play"
										/>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}