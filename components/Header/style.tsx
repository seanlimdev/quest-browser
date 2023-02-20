import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	${({ theme }) => `
  padding: ${theme.spacing['2xs']} ${theme.spacing.s};
`};

	.ng-title-logo {
		cursor: pointer;
	}

	.ng-logo-small {
		display: none;
	}

	@media (max-width: 769px) {
		.ng-title-logo {
			display: none;
		}

		.ng-logo-small {
			display: block;
		}
	}
`;
