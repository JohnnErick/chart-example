import { createSelector } from 'reselect';

export const requests = state => state.chart.requests;

export const initialLoad = createSelector(
	requests,
	requests => requests.initialFetch
);
