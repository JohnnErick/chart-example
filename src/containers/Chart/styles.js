import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	padding: 30px;

	@media(max-width: 500px) {
		padding: 10px;
	}
`;

export const ChartWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	max-width: 1000px;
	background-color: #fff;
	border-radius: 20px;
	padding: 10px 30px;

	@media(max-width: 500px) {
		padding: 10px;
	}
`;
