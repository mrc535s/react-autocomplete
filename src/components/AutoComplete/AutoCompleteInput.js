import React from 'react';
export default class AutoCompleteInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTextChange(e.target.value);
	}
	render() {
		const textStyle = {
			width: '150px'
		}
		return (
		<input type='text' style={textStyle} placeholder='Search' value={this.props.inputText} onChange={this.handleChange} />
		);
	}
}