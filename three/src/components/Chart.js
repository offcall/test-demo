import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {useSelector} from 'react-redux';
import {getConfigChart} from '../selectors/chartSelector';

export const Chart = () => {
	const config = useSelector(getConfigChart);

	return (
		<ReactHighcharts config={config} />
	);
};
