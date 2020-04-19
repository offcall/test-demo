import React, {useCallback} from 'react';
import {typesData} from '../constants/chartConstant';
import {getActiveTypeChart} from '../selectors/chartSelector';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {getChartDataByChangeQuery} from '../actions/chartActions';

export const FilterType = () => {
	const dispatch = useDispatch();
	const activeType = useSelector(getActiveTypeChart);

	const handleChange = useCallback((event) => {
		const {value} = event.currentTarget;

		dispatch(getChartDataByChangeQuery({type: value}));
	}, []);

	return (
		<div>
			<select
				value={activeType}
				onChange={handleChange}
			>
				{typesData.map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};
