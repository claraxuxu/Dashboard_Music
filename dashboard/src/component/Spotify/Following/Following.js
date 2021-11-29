import React, { useState } from 'react';
import './../Spotify.css';
import './Following.css';

export default function Following() {
	const [title, setTitle] = useState([]);

	const width = window.innerWidth;
	
	function addFollow(t) {
		setTitle([...title, {
			title: t,
			id: title.length
		}]
		)
	};
	
	function delFollow(index) {
		const list_tmp = title.filter((item) => item.id !== index);
		setTitle(list_tmp)
	};

	return (
		<div className="col_container">
			<div className="title-bar">
				<h2 className="title-name">Following</h2>
				<button className="plus-btn"
				onClick={() => addFollow("Nom artiste")}>
					<img 
						className="plus-img" 
						src={require('./../../../assets/plus.png').default}
						alt="plus"
					/>
				</button>
			</div>
			<div className="widget-main" style={{width: width / 6 * 5}}>
			{
				title.map((item, index) => {
					return (
						<div className="following-content" key={index}>
                            <img
                                className="following_albumImg"
                                src={require('../../../assets/album_img.png').default}
                                alt="album"
                            />
                            <div className="singer-img">
                                <div className="following-inner">
                                    <h3 className="following-title">{item.title}{item.id}</h3>
									<div style={{display:'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
										<img
											className="minus-btn"
											src={require('../../../assets/play.png').default}
											alt="play"
										/>
										<img
											className="minus-btn"
											src={require('../../../assets/minus.png').default}
											alt="delete"
											onClick={() => delFollow(item.id)}
										/>
									</div>
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