import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	padding: 0 20px 0 40px;

	@media(max-width: 500px) {
		padding: 0 10px;
	}
`;

export const ChartDateRef = styled.div`
	bottom: 10px;
	position: absolute;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 18px;
	padding-right: 140px;
	font-size: 14px;
	color: #8092a0;
	font-weight: 800;

	@media(max-width: 500px) {
		padding-right: 100px;
	}
`;
