import { createSelector } from 'reselect';

export const requests = state => state.chart.requests;

export const initialLoad = createSelector(
	requests,
	requests => requests.initialFetch
);

export const chartData = state => state.chart.chart;

export const chartCategories = createSelector(
	chartData,
	data => data.reduce((acc, item) => {
		acc.push(item[0]);
		return acc;
	}, [])
);

export const chartSeries = createSelector(
	chartData,
	data => data.reduce((acc, item) => {
		acc.push(item[1]);
		return acc;
	}, [])
);
