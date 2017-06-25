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
		const listStyle = this.props.items ? styles : {};
		const listItems = this.props.items ? this.props.items.map((item) => 
			<AutoCompleteListItem key={item.key} item={item} handleItemSelect={this.props.handleItemSelect}/>
		) : '';
		return (
			<ul style={listStyle}>
			{listItems}
			</ul>
		);
	}
}