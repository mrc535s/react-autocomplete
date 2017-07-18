import React from 'react';
export default class AutoCompleteInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.state = {
			outline: 'none'
		}
	}

	handleChange(e) {
		this.props.onTextChange(e.target.value);
	}

	onFocus() {
		this.setState({
			outline: 'none'
		})
	}

	render() {
		const textStyle = {
			width: '150px',
			border: 'none',
    	borderBottom: 'solid 1px gray',
    	background: 'none',
    	padding: '4px',
			outline: this.state.outline
		}
		return (
		<input autoFocus type='text' onFocus={this.onFocus} style={textStyle} placeholder='Search' value={this.props.inputText} onChange={this.handleChange} />
		);
	}
}