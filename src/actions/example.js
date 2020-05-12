import { EXAMPLE } from 'settings/constants';

export const fetchExample = value => {
	return dispatch => {
		dispatch(setExample({ example: true }));
	};
};

export const setExample = data => ({
	type: EXAMPLE.EXAMPLE_SET,
	payload: data
});
