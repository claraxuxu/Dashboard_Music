import React, { useState } from 'react';
import './Spotify.css';
import './Explore.css';

export default function Explore() {
	const [title, setTitle] = useState({
		inputValue: 'hello world!!!!',
		list: []
	});

	const width = window.innerWidth;
	
	function addExplore() {
		setTitle({
			list: [...title.list, title.inputValue],
			inputValue: 'Nom dalbum'
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
						<div className="spotify-content">
                            <img
                                className="spotify_albumImg"
                                src={require('../../assets/album_img.png').default}
                                alt="album"
                            />
                            <div className="beside-img">
                                <div key={index} className="spotify-inner">
                                    <h3 className="spotify-title">{item}</h3>
                                    <img
                                        key={index}
                                        className="minus-btn"
                                        src={require('../../assets/minus.png').default}
                                        alt="delete"
                                        onClick={delExplore.bind(index)}
                                    />
                                </div>
                                <div className="play-bar">
                                    <img
                                        src={require('./../../assets/play.png').default}
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