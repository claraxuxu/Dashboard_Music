import React, { Component } from 'react';
import './Setting.css';

class Setting extends Component {
	
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
                            <div className="widget-content">
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
		// console.log(e.target.value)
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
		console.log(index)
		// 拷贝一份，不要直接去修改state里面的数据
		const list = [...this.state.list];
		list.splice(index, 1)
		
		this.setState({
			list: list
		})
	}
}

export default Setting;