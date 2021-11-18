import React, { useState } from 'react';
import './Spotify.css';

export default function Followed() {
	const [title, setTitle] = useState({
		inputValue: 'hello world!!!!',
		list: []
	});

	const width = window.innerWidth;
	
	function addExplore() {
		setTitle({
			list: [...title.list, title.inputValue],
			inputValue: 'haha'
		})
	};
	
	function delExplore(index) {
		const list = [...title.list];
		list.splice(index, 1)
		setTitle({
			list: list
		})
	};

	return (
		<div className="col_container">
			<div className="title-bar">
				<h2 className="title-name">Explore</h2>
				<button className="plus-btn"
				onClick={addExplore.bind()}>
					<img 
						className="plus-img" 
						src={require('./../../assets/plus.png').default}
						alt="plus"
					/>
				</button>
			</div>
			<div className="widget-main" style={{width: width / 6 * 5}}>
			{
				title.list.map((item, index) => {
					return (
						<div className="widget-content">
							<div key={index} className="widget-inner">
								<h3>{item}</h3>
								<button key={index}
									onClick={delExplore.bind(index)}
								>delete</button>
							</div>
						</div>
					)
				})
			}
			</div>
		</div>
	)
}