import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import chart from './reducers/chartReducer';

const middlewares = [
	thunk,
];

const rootReducer = combineReducers({
	chart,
});

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares),
	);
}

const store = configureStore({});

export default store;
