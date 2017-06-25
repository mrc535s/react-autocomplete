import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteList from './AutoCompleteList';

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


export class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleItemSelect = this.handleItemSelect.bind(this);
		this.filterItems = this.filterItems.bind(this);
		this.state = {items: ITEMS_TO_GET, text: '', selectedItem: ''}
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
				text: text
			}
		})
	}
	handleItemSelect(itemName) {
		this.setState(function(prevState, props) {
			return {
				selectedItem: itemName,
				text: ''
			}
		})
	}
	render() {
		const items = this.filterItems(this.state.items, this.state.text);
		return (
			<div>
				<AutoCompleteInput onTextChange = {this.handleTextChange} inputText={this.state.text}/>
				<AutoCompleteList items = {items} handleItemSelect = {this.handleItemSelect}/>
				<h1>{this.state.selectedItem}</h1>

			</div>
		);
	}
}