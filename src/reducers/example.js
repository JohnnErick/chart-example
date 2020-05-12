import { EXAMPLE } from 'settings/constants';

const initialState = {
	example: true
};

const reducer = {
	[EXAMPLE.EXAMPLE_SET]: (stt, payload) => {
		return { ...stt, ...payload };
	}
};

export default function file(state = initialState, { type, payload }) {
  if (typeof reducer[type] === 'function') {
    return reducer[type](state, payload);
	};

  return state;
};
