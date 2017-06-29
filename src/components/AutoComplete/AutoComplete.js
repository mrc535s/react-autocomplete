import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteList from './AutoCompleteList';

const DOWN_TEXT = 'down';
const UP_TEXT = 'up';
const DOWN = 40;
const UP = 38;
const ENTER = 13;

export default class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleItemSelect = this.handleItemSelect.bind(this);
		this.handleItemMouseHover = this.handleItemMouseHover.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.filterItems = this.filterItems.bind(this);
		this.state = {items: this.props.items, text: '', selectedItem: '', hoveredItem: {}, filteredItems: {}}
	}
	filterItems(items, filter) {
		if (filter && !this.state.selectedItem) {
			return items.filter(item => {
				const itemStr = typeof item.name === "string" ? item.name.toLowerCase() : item.name.toString().toLowerCase();
				return itemStr.includes(filter.toLowerCase());
			})
		} 
		return [];
	}
	handleTextChange(text) {
		this.setState((prevState, props)=> {
			return {
				text: text,
				selectedItem: '',
				hoveredItem: ''
			}
		})
	}
	handleItemSelect(itemName) {
		if (itemName) {
		this.setState(function(prevState, props) {
			return {
				selectedItem: itemName,
				text: itemName,
				hoveredItem: {}
			}
		})
		}
	}
	getHoveredItem(direction, items, prevItem) {
		const index = items.findIndex(function(item){
			return item.key === prevItem.key
		});
		const newIndex = direction === DOWN_TEXT ? index + 1 : index - 1;
		let hoveredItem;
		if (index !== -1) {
			if (items.length !== newIndex && direction === DOWN_TEXT || index !== 0 && direction === UP_TEXT)
				hoveredItem = items[newIndex];
			else  {
				hoveredItem = prevItem;
			}
		} else {
			hoveredItem = items[0];
		}
		return hoveredItem;
	}
	onKeyDown(event) {
		if((event.keyCode===DOWN || event.keyCode===UP) && this.state.text) {
			const direction = event.keyCode===DOWN ? DOWN_TEXT : UP_TEXT;
			this.setState(function(prevState, props) {
				const hoveredItem = this.getHoveredItem(direction, this.state.filteredItems, prevState.hoveredItem)
				return {
					hoveredItem: hoveredItem
				}
			})
		}
		if (event.keyCode === ENTER && this.state.hoveredItem !== {}) {
			this.handleItemSelect(this.state.hoveredItem.name);
		}
	}
	handleItemMouseHover(hoveredItem) {
		if (hoveredItem) {
			this.setState(function(prevState, props) {
				return {
					hoveredItem: hoveredItem
				}
			})
		} else {
			this.setState(function(prevState, props) {
				return {
					hoveredItem: {}
				}
			})
		}
	}
	render() {
		this.state.filteredItems = this.filterItems(this.state.items, this.state.text);
		return (
			<div onKeyDown={this.onKeyDown}>
				<AutoCompleteInput onTextChange = {this.handleTextChange} inputText={this.state.text}/>
				<AutoCompleteList items = {this.state.filteredItems} handleItemSelect = {this.handleItemSelect} 
					handleItemMouseHover={this.handleItemMouseHover} hoveredItem={this.state.hoveredItem}/>
			</div>
		);
	}
}