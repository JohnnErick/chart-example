import axios from 'axios';

import { CHART } from 'settings/constants';
import { chartData } from 'settings/endpoints';

export const fetchChartData = () => {
	return dispatch => {
		const savedFilterValue = parseInt(localStorage.getItem('filterValue'));

		savedFilterValue &&
			dispatch(setFilter({ selected: savedFilterValue }));

		axios.get(chartData)
			.then(({ data }) => {
				dispatch(setChartData(data));
				dispatch(setRequests({ initialFetch: true }));
			});
	};
};

export const filterSet = value => {
	return dispatch => {
		localStorage.setItem('filterValue', value);
		dispatch(setFilter({ selected: parseInt(value) }));
	}
}

export const setFilter = data => ({
	type: CHART.CHART_FILTER_SET,
	payload: data
});

export const setChartData = data => ({
	type: CHART.CHART_SET,
	payload: data
});

export const setRequests = data => ({
	type: CHART.REQUEST_SET,
	payload: data
});
