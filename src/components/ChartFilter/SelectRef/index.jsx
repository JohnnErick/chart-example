import React from 'react';
import { useSelector } from 'react-redux';

import { chartFilteredLabel } from 'selectors/chart';

import { Container } from './styles';

export default function SelectRef() {
	const labelRef = useSelector(state => chartFilteredLabel(state));

	return (
		<Container>
			Você esta vendo o período <strong>{labelRef}</strong>.
		</Container>
	);
};
