import { CHART } from 'settings/constants';

const initialState = {
	chart: [],
	filter: {
		options: [{
			value: 0,
			label: 'Desde o inicio'
		}, {
			value: 1,
			label: 'último mês'
		}, {
			value: 2,
			label: '3 meses'
		}, {
			value: 3,
			label: '1 ano'
		}, {
			value: 4,
			label: '2 anos'
		}],
		selected: 0
	},
	requests: {
		initialFetch: false
	}
};

const reducer = {
	[CHART.CHART_SET]: (stt, payload) => ({
		...stt,
		chart: [
			...payload
		]
	}),
	[CHART.CHART_FILTER_SET]: (stt, payload) => ({
		...stt,
		filter: {
			...stt.filter,
			...payload
		}
	}),
	[CHART.REQUEST_SET]: (stt, payload) => ({
		...stt,
		requests: {
			...stt.request,
			...payload
		}
	})
};

export default function file(state = initialState, { type, payload }) {
  if (typeof reducer[type] === 'function') {
    return reducer[type](state, payload);
	};

  return state;
};
