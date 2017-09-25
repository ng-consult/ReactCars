import React from 'react';
import {connect} from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import Select from 'react-select';

import {CAR_MAKES_ACTIONS, CAR_MODELS_ACTIONS} from '../constants/index';
import {bool, arrayOf, shape, number, string, func} from 'prop-types';
import {dispatchThatFetch} from '../store/connections';


const MakeSelect = (props) => {
	const {isFetching, data, value, onChange} = props;
	if (isFetching || data.length === 0) {
		return (<p>
			Loading the Make Dataset - this can take some time
			<cite>API source: https://vpic.nhtsa.dot.gov/</cite>
		</p>);
	}

	const options = data.map(result => ({value: result.Make_ID, label: result.Make_Name}));
	return (
		<div>
			<Select value={value} onChange={(e) => {onChange(e);}} name="makes" options={options} />
		</div>
		);
};

MakeSelect.PropTypes = {
	isFetching: bool,
	data: shape({
		Count: number,
		Results: arrayOf(shape({
			Make_ID: number,
			Make_Name: string,
		})),
	}),
	value: number,
	onChange: func,
};

MakeSelect.defaultProps = {
	data: [],
	isFetching: false,
};

const componentWillMount = ({dispatch}) => {
	dispatchThatFetch(dispatch)(
		CAR_MAKES_ACTIONS.REQUEST,
		CAR_MAKES_ACTIONS.SUCCESS,
		CAR_MAKES_ACTIONS.ERROR)('makes.json', false);
};

const mapStateToProps = (state, props) => {
	return Object.assign({}, state.carsMakesReducers, {
		dispatch: state.dispatch,
	});
};

const mapDispatchToProps = (dispatch, props) => {
		return Object.assign({}, props, {
			dispatch,
			onChange: (e) => {
				dispatch({
					type: CAR_MAKES_ACTIONS.SET,
					value: e.value,
				});
				dispatchThatFetch(dispatch)(
					CAR_MODELS_ACTIONS.REQUEST,
					CAR_MODELS_ACTIONS.SUCCESS,
					CAR_MODELS_ACTIONS.ERROR)(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${e.label}?format=json`);
			}
		});
};

const MakeSelectCpt = lifecycle({componentWillMount})(MakeSelect);

export default connect(mapStateToProps, mapDispatchToProps)(MakeSelectCpt);
