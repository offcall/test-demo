import moment from 'moment';
import {createActions} from 'redux-actions'
import * as actions from '../constants/chartConstant';
import {
	getQueryChart,
} from '../selectors/chartSelector';

const {
	setChartLoading,
	setChartData,
} = createActions({
	[actions.SET_CHART_LOADING]: (query) => ({query}),
	[actions.SET_CHART_DATA]: (data) => ({data}),
});

const getTestData = ({from, to}) => {
	const countDays = moment(to).diff(moment(from), 'days') + 1;

	const getTestValue = () => (Math.random() * 1000);

	const result = [];

	for (let i = 0; i < countDays; i += 1) {
		result.push(getTestValue());
	}

	return result;
};

export const getChartData = (query) => (dispatch) => {
	dispatch(setChartLoading(query));

	// имитируем получение данных
	setTimeout(() => {
		const periodData = actions.periodsData[query.period];
		const data = getTestData(periodData);

		dispatch(setChartData(data));
	}, 500);
};


export const getChartDataByChangeQuery = (changeQuery) => (dispatch, getState) => {
	const query = getQueryChart(getState());

	dispatch(getChartData({...query, ...changeQuery}));
};
