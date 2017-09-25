import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {carsOfTheWeekReducers, carsMakesReducers, carsModelsReducers} from './cars';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
	carsOfTheWeekReducers,
	carsMakesReducers,
	carsModelsReducers,
  routing,
});

export default rootReducer;
