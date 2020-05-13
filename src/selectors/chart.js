import { createSelector } from 'reselect';
import moment from 'moment';

export const requests = state => state.chart.requests;

export const initialLoad = createSelector(
	requests,
	requests => requests.initialFetch
);

export const filter = state => state.chart.filter;

export const filterOptions = createSelector(
	filter,
	filter => filter.options
);

export const filterSelected = createSelector(
	filter,
	filter => filter.selected
);

export const filterValues = () => [0, 1, 3, 12, 24];

export const chartData = state => state.chart.chart;

export const chartFilteredLabel = createSelector(
	filterSelected,
	filterOptions,
	(selected, options) => {
		const { label } = options.find(option => option.value === selected);
		return label;
	}
);

export const chartFilteredData = createSelector(
	chartData,
	filterValues,
	filterSelected,
	(data, filterValues, selected) => {
		if(filterValues[selected]) {
			const timeRef = moment().subtract(filterValues[selected], 'month').format('x');
			const newData = data.filter(item => item[0] > timeRef);
			return newData ? newData : [];
		} else {
			return data;
		}
	}
);

export const chartCategories = createSelector(
	chartFilteredData,
	data => data.reduce((acc, item) => {
		acc.push(item[0]);
		return acc;
	}, [])
);

export const chartSeries = createSelector(
	chartFilteredData,
	data => data.reduce((acc, item) => {
		acc.push(item[1]);
		return acc;
	}, [])
);
