import React, { useState } from 'react';
import './Spotify.css';
import Popup from '../Tools/Popup/Popup';
import './../Settings/Setting.css';

// import Setting from '../Settings/Setting';

// function Widgets() {
//     return (
//         <div>
//             <h3>here</h3>
//             <p>this is the place to add widget</p>
//         </div>
//     )
// }

class Album extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'hello world!!!!',
			list: []
		}
	}
	
	render() {
		return (
			<div className="widget-container">
				<div className="widget-container">
					<label htmlFor="insertArea">Choose the new widget</label>
					<input 
						id="insertArea"
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<div className="widget-main">
				{
					this.state.list.map((item, index) => {
						return (
                            <div className="widget-content" key={index}>
                                <div 
                                    key={index} 
                                    // dangerouslySetInnerHTML={{__html: item}}
                                    className="widget-inner"
                                >
                                    <h3>{item}</h3>
                                    <button
                                    onClick={this.handleItemDelete.bind(this, index)}
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
	
	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	
	handleBtnClick(e) {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}
	
	handleItemDelete(index) {
		const list = [...this.state.list];
		list.splice(index, 1)
		
		this.setState({
			list: list
		})
	}
}

export default function Spotify() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="container">
            <div className="title-bar">
                <h3 className="title-name">Spotify</h3>
                <button className="plus-btn"
                    onClick={() => setButtonPopup(true)}
                >
                    <img 
                        className="plus-img" 
                        src={require('./../../assets/plus.png').default}
                        alt="plus"
                    />
                </button>
                <Album />

            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>

        </div>
    )
}
