import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchExample, setExample } from 'actions/example';
import { example } from 'selectors/example';
import { Container } from './styles';

export default function ExampleComponent() {
	const dispatch = useDispatch();
	const selectorExample = useSelector(state => example(state));

	useEffect(() => {
		dispatch(setExample({ example: false }));
	}, []);

	useEffect(() => {
		console.log(selectorExample);
		!selectorExample.example && dispatch(fetchExample(true));
	}, [selectorExample]);

	return <Container>App Content</Container>;
};
