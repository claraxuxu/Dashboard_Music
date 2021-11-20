import React, { useState } from 'react';
import './../Spotify.css';
import './Following.css';

export default function Following() {
	const [title, setTitle] = useState({
		inputValue: 'hello following',
		list: []
	});

	const width = window.innerWidth;
	
	function addExplore() {
		setTitle({
			list: [...title.list, title.inputValue],
			inputValue: 'Nom artiste'
		})
	};
	
	function delExplore(index) {
		const list_tmp = [...title.list];
		list_tmp.splice(index, 1)
		setTitle({
			list: list_tmp
		})
	};

	return (
		<div className="col_container">
			<div className="title-bar">
				<h2 className="title-name">Following</h2>
				<button className="plus-btn"
				onClick={addExplore.bind()}>
					<img 
						className="plus-img" 
						src={require('./../../../assets/plus.png').default}
						alt="plus"
					/>
				</button>
			</div>
			<div className="widget-main" style={{width: width / 6 * 5}}>
			{
				title.list.map((item, index) => {
					return (
						<div className="following-content" key={index}>
                            <img
                                className="following_albumImg"
                                src={require('../../../assets/album_img.png').default}
                                alt="album"
                            />
                            <div className="singer-img">
                                <div className="following-inner">
                                    <h3 className="following-title">{item}</h3>
                                    <img
                                        className="minus-btn"
                                        src={require('../../../assets/minus.png').default}
                                        alt="delete"
                                        onClick={delExplore.bind(index)}
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