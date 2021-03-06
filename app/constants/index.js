export const CREATE_TOPIC_REQUEST = 'CREATE_TOPIC_REQUEST';
export const CREATE_TOPIC_FAILURE = 'CREATE_TOPIC_FAILURE';
export const CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS';
export const CREATE_TOPIC_DUPLICATE = 'CREATE_TOPIC_DUPLICATE';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const DESTROY_TOPIC = 'DESTROY_TOPIC';
export const TYPING = 'TYPING';

export const MANUAL_LOGIN_USER = 'MANUAL_LOGIN_USER';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';
export const LOGIN_ERROR_USER = 'LOGIN_ERROR_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_SUCCESS_USER = 'SIGNUP_SUCCESS_USER';
export const SIGNUP_ERROR_USER = 'SIGNUP_ERROR_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_SUCCESS_USER = 'LOGOUT_SUCCESS_USER';
export const LOGOUT_ERROR_USER = 'LOGOUT_ERROR_USER';


const generateActions = (actionName) => {
	return {
		REQUEST: `${actionName}_REQUEST`,
		ERROR: `${actionName}_ERROR`,
		SUCCESS: `${actionName}_SUCCESS`,
		SET: `${actionName}_SET`,
	};
};

export const CAR_OF_THE_WEEK_ACTIONS = generateActions('CAR_OF_THE_WEEK_ACTIONS');

export const CAR_MAKES_ACTIONS =generateActions('CAR_MAKES_ACTIONS');

export const CAR_MODELS_ACTIONS = generateActions('CAR_MODELS_ACTIONS');

