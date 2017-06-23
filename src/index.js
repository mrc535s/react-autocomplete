import React from 'react';
import ReactDOM from 'react-dom';
import {AutoComplete} from './components/auto-complete';

(function() {
	document.addEventListener("DOMContentLoaded", function(event) {
		let elements = document.getElementsByClassName("root");
		for (let i=0; i<=elements.length; i++) {
			//createAutoCompleteComponent(elements[i]);
		}
	});

	createAutoCompleteComponent(document.getElementById("root"));
	createAutoCompleteComponent(document.getElementById("root2"));
	function createAutoCompleteComponent(element) {
		ReactDOM.render(
			<AutoComplete/>,
			element
		);
	}

	window.createAutoCompleteComponent = createAutoCompleteComponent;
}())
