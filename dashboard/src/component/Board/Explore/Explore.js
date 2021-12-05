import React, { useState } from 'react';
import '../Board.css';
import './Explore.css';
import Deezer from './Services/Deezer';
import Napster from './Services/Napster';
import Itunes from './Services/Itunes';
import { toast } from "react-toastify";
import PopupW from './../../Tools/PopupW/PopupW';
import HeaderWidget from './Tools/HeaderWidget';
import TopWidget from './Tools/TopWidget';
import './../../Api';
import './../../config';

toast.configure()
export default function Explore(props) {
	const width = window.innerWidth;
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
			toast("Delected!")
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
			toast("Edited!")
        }
        catch(e) { console.log(e) }
    }

	return (
		<div className="col_container">
			<TopWidget setPop={setPop} />
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
												i={item}
												fe={EditWidget}
												link={item.data.cover}
												d={item.data.release_date}
											/>
										</div>
									: item.services === "napster" ?
										<div className="play-bar">
											<Napster
												i={item}
												fe={EditWidget}
												link={item.data.cover}
												d={item.data.release_date}
											/>
										</div>
									: <div className="play-bar">
											<Itunes
												i={item}
												fe={EditWidget}
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