import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './components/AutoComplete/AutoComplete'
const items = [{
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
	}, {
		name: 'Sherry',
		key: '445885'
	}, {
		name: 'Stiller',
		key: '1234'
	}, {
		name: 'Someone',
		key: '2354'
	}, {
		name: 'Silly Guy',
		key: '4815'
	}];

ReactDOM.render(
  <AutoComplete items={items}/>,
  document.getElementById('root')
);