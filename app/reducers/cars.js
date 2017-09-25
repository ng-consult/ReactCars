import {
	CAR_OF_THE_WEEK_ACTIONS,
	CAR_MAKES_ACTIONS,
	CAR_MODELS_ACTIONS,
} from '../constants/index';

import 'isomorphic-fetch';


export const carsOfTheWeekReducers = (prevState = {
	loading: false,
	data: [],
	error: false,
}, action) => {
	switch (action.type) {
		case CAR_OF_THE_WEEK_ACTIONS.REQUEST:
			return Object.assign({}, prevState, {
				isFetching: true,
			});
		case CAR_OF_THE_WEEK_ACTIONS.SUCCESS:
			return Object.assign({}, prevState, {
				isFetching: false,
				data: action.json,
			});
		case CAR_OF_THE_WEEK_ACTIONS.ERROR:
			return Object.assign({}, prevState, {
				isFetching: false,
				error: action.e,
			});
		default:
			return prevState;
	}
};

export const carsMakesReducers = (prevState = {
	isFetching: false,
	data: [],
	error: false,
	nbResults: 0,
	value: null,
}, action) => {
	switch (action.type) {
		case CAR_MAKES_ACTIONS.REQUEST:
			return Object.assign({}, prevState, {
				isFetching: true,
			});
		case CAR_MAKES_ACTIONS.SUCCESS:
			return Object.assign({}, prevState, {
				isFetching: false,
				data: action.json.Results,
			});
		case CAR_MAKES_ACTIONS.ERROR:
			return Object.assign({}, prevState, {
				isFetching: false,
				error: action.e,
				data: [],
			});
		case CAR_MAKES_ACTIONS.SET:
			return Object.assign({}, prevState, {
				value: action.value,
			});
		default:
			return prevState;
	}
};


export const carsModelsReducers = (prevState = {
	isFetching: false,
	data: [],
	nbResults: 0,
	error: false,
	value: null,
}, action) => {
	switch (action.type) {
		case CAR_MODELS_ACTIONS.REQUEST:
			return Object.assign({}, prevState, {
				isFetching: true,
			});
		case CAR_MODELS_ACTIONS.SUCCESS:
			return Object.assign({}, prevState, {
				isFetching: false,
				data: action.json.Results,
			});
		case CAR_MODELS_ACTIONS.ERROR:
			return Object.assign({}, prevState, {
				isFetching: false,
				error: action.e,
			});
		case CAR_MODELS_ACTIONS.SET:
			return Object.assign({}, prevState, {
				value: action.value,
			});
		default:
			return prevState;
	}
};



