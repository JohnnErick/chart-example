import axios from 'axios';

import { CHART } from 'settings/constants';
import { chartData } from 'settings/endpoints';

export const fetchChartData = () => {
	return dispatch => {
		axios.get(chartData)
			.then(({ data }) => {
				dispatch(setChartData(data));
				dispatch(setRequests({ initialFetch: true }));
			});
	};
};

export const setChartData = data => ({
	type: CHART.CHART_SET,
	payload: data
});

export const setRequests = data => ({
	type: CHART.REQUEST_SET,
	payload: data
});
