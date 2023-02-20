import styled from 'styled-components';

export const Card = styled.div`
	width: 100%;
	height: 100%;

	${({ theme: { colors, radius, spacing } }) => `
		padding: ${spacing['4xs']};
		border: ${colors.border?.lightGrey500};
		border-radius: ${radius.xl};
		background: #1d1c1a;
	`}

	&:hover {
		cursor: pointer;
		-webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -5px rgba(190, 167, 126, 0.4);
		box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px -5px rgba(190, 167, 126, 0.4);
		transform: scale(1.05);
	}

	transition: all 0.2s ease-out;
`;

export const Content = styled.div`
	padding: ${({ theme }) => theme.spacing['5xs']};
`;
