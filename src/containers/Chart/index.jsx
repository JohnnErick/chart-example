import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { fetchChartData } from 'actions/chart';
import { initialLoad } from 'selectors/chart';
import ChartComponent from 'components/Chart';

import { Container, ChartWrapper } from './styles';

export default function Chart() {
	const dispatch = useDispatch();
	const initialRequest = useSelector(state => initialLoad(state));

	useEffect(() => {
		dispatch(fetchChartData());
	}, []);

	return (
		<Container>
			{
				!initialRequest
					? (
						<FontAwesomeIcon
							icon={faSpinner}
							style={{ fontSize: 40 }}
							spin
							color='#6678FF'
						/>
					) : (
						<ChartWrapper>
							<ChartComponent />
						</ChartWrapper>
					)
			}
		</Container>
	);
};
