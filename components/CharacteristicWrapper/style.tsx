import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	align-items: center;

	${({ theme }) => `
		margin-top: ${theme.spacing['4xs']};
		> div {
			margin-bottom: ${theme.spacing['4xs']};
		}

		div:nth-last-child(-n + 2) {
			margin-bottom: 0;
		}
	`};
`;
