import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding-bottom: 20px;
`;

export const SelectWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 5px 10px;
	cursor: pointer;
	transition: 0.3s;
	font-weight: 500;

	:hover {
		opacity: 0.7;
	}

	select {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 12px;
		color: #2e3235;
		width: 100%;
		height: 100%;
		border: none;
		color: rgba(0,0,0,0);
		background-color: transparent;
		cursor: pointer;

		:focus {
			outiline: medium invert color;
		}
	}
`;
