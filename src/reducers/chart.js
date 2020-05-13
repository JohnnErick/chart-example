import { CHART } from 'settings/constants';

const initialState = {
	chart: [],
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
