import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AutoCompleteList from '../src/components/AutoComplete/AutoCompleteList.js';

describe('Auto Complete List', () => {
	let component;
	let wrapper;
	const items = [{
		name: 'Praveen',
		key: '1234'
	}, {
		name: 'Praveen 2',
		key: '12348'
	},{
		name: 'Mike',
		key: '4453'
	},
	{
		name: 1221,
		key: '4453'
	}];
	
	it('Should render the Auto Complete Component', () => {
		const wrapper = shallow(<AutoCompleteList items = {items}/>);
    expect(wrapper.find('AutoCompleteListItem').length).toEqual(4);
  });

	it('Should render the Auto Complete Component', () => {
		const wrapper = shallow(<AutoCompleteList/>);
    expect(wrapper.find('AutoCompleteListItem').length).toEqual(0);
  });
});