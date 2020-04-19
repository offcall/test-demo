import moment from 'moment';
import {createSelector} from 'reselect';
import {periodsData} from '../constants/chartConstant';

export const getChartState = state => state.chart;

export const getLoadingChart = state => getChartState(state).loading;
export const getQueryChart = state => getChartState(state).query;
export const getQueryForDataChart = state => getChartState(state).queryForData;
export const getDataChart = state => getChartState(state).data;

export const getActivePeriodChart = state => getQueryChart(state).period;
export const getActiveTypeChart = state => getQueryChart(state).type;

export const getCategoriesForChart = createSelector(
	getQueryForDataChart,
	query => {
		const result = [];
		const formatDate = 'DD MMM, YYYY';
		const periodData = periodsData[query.period];

		if (!periodData) return result;

		const momentFrom = moment(periodData.from);
		const toFrom = moment(periodData.to);

		while(momentFrom <= toFrom) {
			result.push(momentFrom.format(formatDate));

			momentFrom.add(1, 'day');
		}

		return result;
	},
);

export const getConfigChart = createSelector(
	getQueryForDataChart,
	getDataChart,
	getCategoriesForChart,
	(query, data, categories) => ({
		chart: {
			type: 'spline'
		},
		title: {
			text: 'My supa chart'
		},
		xAxis: {
				categories,
		},
		yAxis: {
			title: {
				text: query.type,
			},
		},
		series: [
			{
				name: query.type,
				data,
			}
		],
	})
);
