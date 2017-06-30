import React from 'react';
import AutoCompleteListItem from './AutoCompleteListItem';
export default class AutoCompleteList extends React.Component {
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
		const itemsExist = this.props.items && this.props.items.length;
		const listStyle = itemsExist > 0 ? styles : {};
		const listItems = itemsExist > 0 ? this.props.items.map((item) => 
			<AutoCompleteListItem key={item.key} item={item} hoveredItem = {this.props.hoveredItem} handleItemSelect={this.props.handleItemSelect} 
				handleItemMouseHover = {this.props.handleItemMouseHover}/>
		) : '';
		return (
			<ul style={listStyle}>
			{listItems}
			</ul>
		);
	}
}