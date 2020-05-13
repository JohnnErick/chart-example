import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
import numeral from 'numeral';
import moment from 'moment';

import { chartCategories, chartSeries } from 'selectors/chart';

import { Container, ChartDateRef } from './styles';

export default function ChartItem() {
	const categories = useSelector(state => chartCategories(state));
	const series = useSelector(state => chartSeries(state));

	const [ options ] = useState({
		chart: {
			id: 'chart-bar',
			type: 'area',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		tooltip: {
			y: {
				formatter: val => `R$ ${numeral(val).format('0,0.00')}`
			}
		},
		xaxis: {
			categories,
			tooltip: {
				enabled: false
			},
			labels: {
				show: false,
				formatter: val => `Data: ${moment(val).format('L')}`
			}
		},
		yaxis: {
			opposite: true,
			labels: {
				formatter: val => numeral(val).format('0,0a'),
				style: {
					colors: '#bdbdbd',
					maxWidth: 40,
					minWidth: 40,
					fontSize: '16px'
				}
			},
		}
	});

	const [ seriesData ] = useState([{
		name: 'Valor',
		data: series
	}]);

	return (
		<Container>
			<Chart
        options={options}
				series={seriesData}
				type='area'
      />
			<ChartDateRef>
				<span>{moment(categories[0]).format('DD MMM YYYY')}</span>
				<span>{moment(categories.slice(-1)[0]).format('DD MMM YYYY')}</span>
			</ChartDateRef>
		</Container>
	);
};
