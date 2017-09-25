import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import {CAR_MODELS_ACTIONS} from '../constants'

import {bool, arrayOf, shape, number, string, func} from 'prop-types';


const ModelSelect = (props) => {
	console.log('PROPS', props);
	const {isFetching, data, value, onChange} = props;
	if (!isFetching && data.length === 0) {
		return (<p>Please select a Make</p>);
	} else if (isFetching) {
		return (
		<div>
			<p>
				Loading the models Dataset - this can take some time
				<cite>API source: https://vpic.nhtsa.dot.gov/</cite>
			</p>
		</div>
			);
	}
	const options = data.map(result => ({value: result.Model_ID, label: result.Model_Name}));
	return (
		<div>
			<Select value={value} onChange={(e) => {onChange(e);}} name="models" options={options} />
		</div>
	);
};

ModelSelect.PropTypes = {
	isFetching: bool,
	data: shape({
		Count: number,
		Results: arrayOf(shape({
			Make_ID: number,
			Make_Name: string,
			Model_ID: number,
			Model_Name: string,
		})),
	}),
	value: number,
	onChange: func,
};

ModelSelect.defaultProps = {
	data: [],
	isFetching: false,
};

const mapStateToProps = (state, props) => {
	console.log('MAP STATE TO PROPS', state, props);
	return Object.assign({}, state.carsModelsReducers, {
		dispatch: state.dispatch,
	});
};

const mapDispatchToProps = (dispatch, props) => {
	return Object.assign({}, props, {
		dispatch,
		onChange: (e) => {
			dispatch({
				type: CAR_MODELS_ACTIONS.SET,
				value: e.value,
			});
		}
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelSelect);
