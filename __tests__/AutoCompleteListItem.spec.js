import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AutoCompleteListItem from '../src/components/AutoComplete/AutoCompleteListItem.js';

describe('AutoComplete List Item', () => {
	let component;
	let wrapper;
	let item = {
		key: 1234,
		name: 'Mike'
	};
	const hoveredItem = {};
	const sampleText = 'Test';
	const handleItemMouseHover = () => {
		return;
	};
	let mouseEnterSpy, mouseOutSpy, clickSpy;
	const handleItemSelect = () => {
		return;
	};
	beforeEach(function() {
		mouseEnterSpy = jest.spyOn(AutoCompleteListItem.prototype, 'onMouseOver');
		mouseOutSpy = jest.spyOn(AutoCompleteListItem.prototype, 'onMouseOut');
		clickSpy = jest.spyOn(AutoCompleteListItem.prototype, 'onClick');
	
		wrapper = shallow(<AutoCompleteListItem key={item.key} hoveredItem={hoveredItem} item={item} handleItemSelect={handleItemSelect} 
				handleItemMouseHover = {handleItemMouseHover}/>);
		component = wrapper.instance();
		
	});

	it('Should render the Auto Complete List Item and show one <li> element', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('Should render the Auto Complete List Item and show one <li> element if li key is string', () => {
		item.name = 1234;
		wrapper = shallow(<AutoCompleteListItem key={item.key} hoveredItem={hoveredItem} item={item} handleItemSelect={handleItemSelect} 
				handleItemMouseHover = {handleItemMouseHover}/>);
    expect(wrapper.find('li').length).toEqual(1);
  });
	it('Should call the the onMouseOver function on mouseover event for li', () => {
		const listItem = wrapper.find('li');
		listItem.simulate('mouseover');
		expect(mouseEnterSpy).toHaveBeenCalled();
  });

	it('Should call the the onMouseOut function on mouseout event for li', () => {
		const listItem = wrapper.find('li');
		listItem.simulate('mouseout');
		expect(mouseOutSpy).toHaveBeenCalled();
  });

	it('Should call the the onClick function on click event for li', () => {
		const listItem = wrapper.find('li');
		listItem.simulate('click');
		expect(clickSpy).toHaveBeenCalled();
  });

	it ('should return #d3d3d3 if hoveredItem.key equals item.key', () => {
		const hoveredItem = item;
		wrapper = shallow(<AutoCompleteListItem key={item.key} hoveredItem={hoveredItem} item={item} handleItemSelect={handleItemSelect} 
				handleItemMouseHover = {handleItemMouseHover}/>);
		component = wrapper.instance();
		expect(component.getBackground()).toEqual('#d3d3d3');
	});

});