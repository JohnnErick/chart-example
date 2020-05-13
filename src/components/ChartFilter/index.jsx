import React from 'react';

import SelectFilter from './SelectFilter';
import SelectRef from './SelectRef';

import { Container } from './styles';

export default function ChartFilter() {
	return (
		<Container>
			<SelectFilter />
			<SelectRef />
		</Container>
	);
};
