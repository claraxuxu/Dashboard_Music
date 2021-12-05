import React, { useState } from 'react';
import '../Board.css';
import './Explore.css';
import Plus from './../../../assets/plus.png';
import Minus from './../../../assets/minus.png';
import Deezer from './Deezer';
import Napster from './Napster';
import Itunes from './Itunes';
import PopupW from './../../Tools/PopupW/PopupW';
import './../../Api';
import './../../config';

function HeaderWidget(props) {
	return (
		<div className="explore-inner">
			{props.i.feature === "song_rank" ?
				<h3 className="explore-title">Best song - {props.i.params}</h3>
			: props.i.feature === "artist_stats" ?
				<h3 className="explore-title">Artist Info - {props.i.params}</h3>
			: props.i.feature === "newest_release" ?
				<h3 className="explore-title">Newest - {props.i.params}</h3>
			:
				<h3 className="explore-title">Song Rank - {props.i.params}</h3>
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

export default function Explore(props) {
	const width = window.innerWidth;
	const [title, setTitle] = useState();
	const [params, setParams] = useState();
	const [pop, setPop] = useState(false);

	const CreateWidget = async (s, p, f) => {
        try {
            const infos = await fetch(`${global.api.GetWidget}?service=${s}&feature=${f}&params=${p}&clock=10`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token,
                }
            });
			console.log(global.mytoken.token)
            const json_info = await infos.json();
			console.log(json_info);
			setPop(false);
			props.setW(json_info.widgets);
        }
        catch(e) { console.log(e) }
    }

	const DeleteWidget = async (id) => {
        try {
            const infos = await fetch(`${global.api.GetWidget}?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token,
                }
            });
            const json_info = await infos.json();
			props.setW(json_info.widgets);
			global.gtitle=title;
        }
        catch(e) { console.log(e) }
    }

	const EditWidget = async (p, id) => {
        try {
            const infos = await fetch(`${global.api.GetWidget}?id=${id}&params=${p}&clock=60`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Clac-Token': global.mytoken.token,
                }
            });
            const json_info = await infos.json();
			props.setW(json_info.widgets);
        }
        catch(e) { console.log(e) }
    }

	function handleChangeType(value, id) {
		title[id].type = value.label;
		setTitle([...title]);
	};

	return (
		<div className="col_container">
			<div className="ex-title-bar">
				<h2 className="title-name">Accueil</h2>
				<button className="plus-btn"
					onClick={() => setPop(true)}>
					<img
						className="plus-img"
						src={Plus}
						alt="plus"
					/>
				</button>
			</div>
			<div className="widget-main" style={{ width: width / 6 * 5 }}>
				{global.in && props.w ?
					props.w.map((item, index) => {
						return (
							<div className="explore-content" key={index}>
								<div className="beside-img">
									<HeaderWidget 
									i={item}
									service={item.services}
									del={DeleteWidget} />
									{item.services === "deezer" ? 
										<div className="play-bar">
											<Deezer
												on={handleChangeType}
												i={item}
												fe={EditWidget}
												params={params}
												setP={setParams}
												link={item.data.cover}
												d={item.data.release_date}
											/>
										</div>
									: item.services === "napster" ?
										<div className="play-bar">
											<Napster
												on={handleChangeType}
												i={item}
												fe={EditWidget}
												params={params}
												setP={setParams}
												link={item.data.cover}
												d={item.data.release_date}
											/>
										</div>
									: <div className="play-bar">
											<Itunes
												on={handleChangeType}
												i={item}
												fe={EditWidget}
												params={params}
												setP={setParams}
												link={item.data.cover}
												d={item.data.release_date}
											/>
										</div>
									}
								</div>
							</div>
						)
					})
				: null
				}
			</div>
			<PopupW trigger={pop} setTrigger={setPop} create={CreateWidget}>
            </PopupW>
		</div>
	)
}