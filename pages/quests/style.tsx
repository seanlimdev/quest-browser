import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	${({ theme: { spacing } }) => `
    padding: ${spacing['2xs']} ${spacing.s};
		margin-bottom: ${spacing['4xs']};
  `};

	gap: 24px;

	a {
		text-decoration: none;
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
