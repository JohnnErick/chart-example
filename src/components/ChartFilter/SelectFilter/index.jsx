import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { filterOptions, filterSelected } from 'selectors/chart';
import { filterSet } from 'actions/chart';
import { Container, SelectWrapper } from './styles';

export default function SelectFilter() {
	const dispatch = useDispatch();
	const options = useSelector(state => filterOptions(state));
	const selected = useSelector(state => filterSelected(state));

	function handleChange(e) {
		dispatch(filterSet(e.target.value));
	}

	return (
		<Container>
			<SelectWrapper>
				<FontAwesomeIcon
					icon={faCalendarAlt}
					style={{ fontSize: 20, marginRight: 10 }}
					color='#2e3235'
				/>
				período
				<select onChange={handleChange} value={selected}>
					{
						options.map((option, key) => (
							<option
								key={`filter-option-${key}`}
								value={option.value}
							>
								{option.label}
							</option>
						))
					}
				</select>
			</SelectWrapper>
		</Container>
	);
};
