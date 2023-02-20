import styled from 'styled-components';

export const RewardsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 58px;
	height: 58px;
	${({ theme: { fonts, colors, spacing } }) => `
    border: ${colors.border?.gold};
    color: ${fonts.colors.white};
    margin-top: ${spacing['4xs']};

    > p {
      margin-top: ${spacing['4xs']};
    }
  `}

	background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
`;
