import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AutoCompleteInput from '../src/components/AutoComplete/AutoCompleteInput.js';

describe('AutoComplete Input', () => {
	let component;
	let wrapper;
	const spy = jest.spyOn(AutoCompleteInput.prototype, 'handleChange');
	const sampleText = 'Test';
	beforeEach(function() {
		const handleTextChange = (text) => {
			return text;
		};
		wrapper = shallow(<AutoCompleteInput onTextChange = {handleTextChange} inputText={sampleText}/>);
		component = wrapper.instance();
		
	});

	it('Should render the Auto Complete Input and show one <input> element', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

	it('Should call the handleChange function when calling the onChange function', () => {
		const input = wrapper.find('input');
		input.simulate('change', {target: {value: sampleText}});
		expect(spy).toHaveBeenCalled();
  });

});