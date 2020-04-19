export const SET_CHART_LOADING = 'SET_CHART_LOADING';
export const SET_CHART_DATA = 'SET_CHART_DATA';

// Предпологаю что этот набор должен приходить с бека
// Или его нужно считать каждый раз
export const periodsData = {
	week: {
		name: 'Week',
		from: '2020-04-12',
		to: '2020-04-19',
	},
	month: {
		name: 'Month',
		from: '2020-03-19',
		to: '2020-04-19',
	},
	quarter: {
		name: 'Quarter',
		from: '2020-04-01',
		to: '2020-04-19',
	},
	year: {
		name: 'Year',
		from: '2020-01-01',
		to: '2020-04-19',
	},
	max: {
		name: 'Max',
		from: '2019-01-01',
		to: '2020-04-19',
	},
};

export const typesData = ['Yield', 'Spread', 'Price'];
