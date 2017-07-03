import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AutoComplete from '../src/components/AutoComplete/AutoComplete.js';

describe('Auto Complete', () => {
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
	const testDownEvent = {
		keyCode: 40
	};
	const testUpEvent = {
		keyCode: 38
	};
	const testEnterEvent = {
		keyCode: 13
	};
	beforeEach(function() {
		wrapper = shallow(<AutoComplete items={items}/>);
		component = wrapper.instance();
	});

	it('Should render the Auto Complete Component', () => {
    expect(wrapper.find('AutoCompleteList').length).toEqual(1);
		expect(wrapper.find('AutoCompleteInput').length).toEqual(1);
  });

	it('Should filter the data when text is added to the state', () => {
		component.handleTextChange('m');
		expect(wrapper.state('filteredItems').length).toEqual(1);
  });

	it('Should filter the data when text is added to the state and is not a string', () => {
		component.handleTextChange('1');
		expect(wrapper.state('filteredItems').length).toEqual(1);
  });

	it('should set state.selectedItem and state.text to itemName when selecting an item', () => {
		const selectedItem = 'Mike';
		component.handleItemSelect(selectedItem);
		expect(wrapper.state('selectedItem')).toEqual(selectedItem);
		expect(wrapper.state('text')).toEqual(selectedItem);
		expect(wrapper.state('hoveredItem')).toEqual({});
  });

	it('should NOT set state.selectedItem and state.text to itemName when there is no itemName', () => {
		const selectedItem = null;
		component.handleItemSelect(selectedItem);
		expect(wrapper.state('selectedItem')).toEqual('');
		expect(wrapper.state('text')).toEqual('');
  });

	it('should set hovered item to the first item in filteredItems', () => {
		component.handleTextChange('p');
		component.onKeyDown(testDownEvent);
		expect(wrapper.state('hoveredItem')).toEqual(wrapper.state('filteredItems')[0]);
	});

	it('should set hovered item to the second item in filteredItems when pressing down twice', () => {
		component.handleTextChange('p');
		component.onKeyDown(testDownEvent);
		component.onKeyDown(testDownEvent);
		expect(wrapper.state('hoveredItem')).toEqual(wrapper.state('filteredItems')[1]);
	});

	it('should set hovered item to the last item in filteredItems when pressing down three times', () => {
		component.handleTextChange('p');
		component.onKeyDown(testDownEvent);
		component.onKeyDown(testDownEvent);
		component.onKeyDown(testDownEvent);
		expect(wrapper.state('hoveredItem')).toEqual(wrapper.state('filteredItems')[1]);
	});

	it('should set hovered item to the last item in filteredItems when pressing up when on the last item', () => {
		component.handleTextChange('p');
		wrapper.setState({
			hoveredItem: items[1]
		});
		component.onKeyDown(testUpEvent);
		expect(wrapper.state('hoveredItem')).toEqual(wrapper.state('filteredItems')[0]);
	});

	it('should should select item when pressing enter and item is selected', () => {
		component.handleTextChange('p');
		wrapper.setState({
			hoveredItem: items[1]
		});
		component.onKeyDown(testEnterEvent);
		expect(wrapper.state('selectedItem')).toEqual(items[1].name);
	});

	it('should should select item when pressing enter and item is selected', () => {
		component.handleItemMouseHover(items[0]);
		expect(wrapper.state('hoveredItem')).toEqual(items[0]);
	});

	it('should should select item when pressing enter and item is selected', () => {
		component.handleItemMouseHover(null);
		expect(wrapper.state('hoveredItem')).toEqual({});
	});
});