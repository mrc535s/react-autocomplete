import React from 'react';
export default class AutoCompleteListItem extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.getBackground = this.getBackground.bind(this);
		this.state = {
			hovered: false
		}
	}
	getBackground() {
		if (this.props.hoveredItem.key === this.props.item.key) {
			return "#d3d3d3"
		}
	}
	onMouseOver () {
    //this.setState({ hovered:true });
		this.props.handleItemMouseHover(this.props.item);
  }
  onMouseOut () {
    //this.setState({ hovered:false });
		this.props.handleItemMouseHover(null);
  }

	onClick() {
		this.props.handleItemSelect(this.props.item.name);
	}
	render () {
		const item = typeof this.props.item.name === "string" ? this.props.item : this.props.item;
		const listStyles = {
			backgroundColor: this.getBackground(),
			cursor: "pointer",
			padding: "5px"
		}
		return (
			<li style={listStyles} onMouseOver={this.onMouseOver} 
				onMouseOut={this.onMouseOut} onClick={this.onClick}>{item.name}</li>
		);
	}
}