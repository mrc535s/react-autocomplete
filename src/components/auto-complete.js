import React from 'react';

const ITEMS_TO_GET = [{
	name: 'Praveen',
	key: '1234'
}, {
	name: 'Mike',
	key: '4453'
}, {
	name: 'John',
	key: '4454'
}, {
	name: 'Sapnna',
	key: '4456'
}, {
	name: 'Srikanth',
	key: '4450'
}, {
	name: 'Chetan',
	key: '44512'
}];

export class AutoCompleteInput extends React.Component {
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

export class AutoCompleteListItem extends React.Component {
	constructor(props) {
		super(props);
		this.onMouseOut = this.onMouseOut.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.getBackground = this.getBackground.bind(this);
		this.state = {
			hovered: false
		}
	}
	getBackground() {
		if (this.state.hovered) {
			return "#d3d3d3"
		}
	}
	onMouseOver () {
    this.setState({ hovered:true });
  }
  onMouseOut () {
    this.setState({ hovered:false });
  }
	render () {
		const item = typeof this.props.item.name === "string" ? this.props.item : this.props.item;
		const listStyles = {
			backgroundColor: this.getBackground(),
			cursor: "pointer",
			padding: "5px"
		}
		return (
			<li style={listStyles} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>{item.name}</li>
		);
	}
}

export class AutoCompleteList extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const styles = {
  		border: 'solid 1.5px grey',
  		width: '150px',
			padding: "1px",
			margin: 0,
			height: 'auto',
			listStyle: 'none'
		};
		const listStyle = this.props.items ? styles : {};
		const listItems = this.props.items ? this.props.items.map((item) => 
			<AutoCompleteListItem key={item.key} item={item}/>
		) : '';
		return (
			<ul style={listStyle}>
			{listItems}
			</ul>
		);
	}
}

export class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.filterItems = this.filterItems.bind(this);
		this.state = {items: ITEMS_TO_GET, text: ''}
	}
	filterItems(items, filter) {
		if (filter) {
			return items.filter(item => {
				const itemStr = typeof item.name === "string" ? item.name.toLowerCase() : item.name.toString().toLowerCase();
				return itemStr.includes(filter.toLowerCase());
			})
		} 
		return false;
	}
	handleTextChange(text) {
		this.setState((prevState, props)=> {
			return {
				items: prevState.items,
				text: text
			}
		})
	}
	render() {
		const items = this.filterItems(this.state.items, this.state.text);
		return (
			<div>
			<AutoCompleteInput onTextChange = {this.handleTextChange} inputText={this.state.text}/>
			<AutoCompleteList items = {items}/>
			</div>
		);
	}
}