import React, { useState } from 'react';
import '../Board.css';
import './Explore.css';
import Plus from './../../../assets/plus.png';
import Minus from './../../../assets/minus.png';
import Deezer from './Deezer';
import PopupW from './../../Tools/PopupW/PopupW';
import './../../Api';
import './../../config';

function HeaderWidget(props) {
	return (
		<div className="explore-inner">
			<h3 className="explore-title">{props.type}</h3>
			<img
				className="minus-btn"
				src={Minus}
				alt="delete"
				onClick={() => props.del(props.id)}
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
									<p>{item.id}</p>
									<p>{item.params}</p>
									<HeaderWidget type={item.data.title} id={item.id} del={DeleteWidget} />
									<div className="play-bar">
										<Deezer
											on={handleChangeType}
											fe={EditWidget}
											id={item.id}
											params={params}
											setP={setParams}
											link={item.data.cover}
											d={item.data.release_date}
										/>
									</div> 
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


// {
// 	title.map((item, index) => {
// 		return (
// 			<div className="explore-content" key={index}>
// 				<div className="beside-img">
// 					<HeaderWidget type={item.type} if={item.id} del={delExplore} />
// 					<div className="play-bar">
// 					{item.type === global.Services[0].value ? 
// 						<Deezer
// 							on={handleChangeType}
// 							id={item.id}
// 							params={params}
// 							setP={setParams}
// 						/>
// 					: (item.type === global.Services[3].value) ?
// 						<Clockf on={handleChangeType}
// 								id={item.id}
// 						/>
// 					: null}
// 					</div> 
// 				</div>
// 			</div>
// 		)
// 	})
// }