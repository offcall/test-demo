import React, {useEffect} from 'react';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getChartData} from '../actions/chartActions';

import {getLoadingChart} from '../selectors/chartSelector';

import {FilterPeriod} from './FilterPeriod';
import {FilterType} from './FilterType';
import {Chart} from './Chart';
import {Loading} from './Loading';

export const Main = () => {
	const dispatch = useDispatch();
	const loading = useSelector(getLoadingChart);

	useEffect(() => {
		dispatch(getChartData({period: 'month', type: 'Price'}));
	}, []);

	return (
		<div>
			<FilterPeriod />
			<br />
			<FilterType />
			<br />
			{loading
				? <Loading />
				: <Chart />}
		</div>
	);
};
