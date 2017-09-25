import React from 'react';
import {connect} from 'react-redux';
import {bool, func, number} from 'prop-types';
import { browserHistory } from 'react-router'

const SearchBtn = ({disabled, onClick, make, model}) => {
	return (<button type="button"
		disabled={disabled}
		onClick={() => onClick(make, model)}>
		Search {make} {model}
	</button>);
};

SearchBtn.PropTypes = {
	disabled: bool,
	onClick: func,
	make: number,
	value: number,
};


const mapStateToProps = (state) => {
	console.log('mapStateToProps', state);
	return {
		disabled: state.carsMakesReducers.value === null || state.carsModelsReducers.value === null,
		make: state.carsMakesReducers.data.reduce((acc, elem) => {
			if (elem.Make_ID === state.carsMakesReducers.value) {
				return elem.Make_Name;
			}
			return acc;
		}, null),
		model: state.carsModelsReducers.data.reduce((acc, elem) => {
			if (elem.Model_ID === state.carsModelsReducers.value) {
				return elem.Model_Name;
			}
			return acc;
		}, null),
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	onClick: (make, model) => {
		console.log('onCLick', make, model);
		browserHistory.push(`/car/${make}/${model}`);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBtn);