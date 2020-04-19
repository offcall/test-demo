import React, {useCallback} from 'react';
import {periodsData} from '../constants/chartConstant';
import {getActivePeriodChart} from '../selectors/chartSelector';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getChartDataByChangeQuery} from '../actions/chartActions';

const activeStyles = {
	background: 'green',
};

export const FilterPeriod = () => {
	const dispatch = useDispatch();
	const activePeriod = useSelector(getActivePeriodChart);

	const handleClick = useCallback((event) => {
		const {name} = event.currentTarget.dataset;

		dispatch(getChartDataByChangeQuery({period: name}));
	}, []);

	return (
		<div>
			{Object.keys(periodsData).map(type => (
				<button
					key={type}
					type="button"
					data-name={type}
					onClick={handleClick}
					style={activePeriod === type ? activeStyles : undefined}
				>
					{periodsData[type].name}
				</button>
			))}
		</div>
	);
};
