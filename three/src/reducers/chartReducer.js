import * as actions from '../constants/chartConstant';
import {handleActions} from 'redux-actions';

const initialState = {
	loading: true,
	query: {},
	queryForData: {},
	data: [],
};

export default handleActions({
	[actions.SET_CHART_LOADING]: (state, {payload: {query}}) => ({
		...state,
		query,
		loading: true,
	}),
	[actions.SET_CHART_DATA]: (state, {payload: {data}}) => ({
		...state,
		data,
		queryForData: state.query,
		loading: false,
	}),
}, initialState);
