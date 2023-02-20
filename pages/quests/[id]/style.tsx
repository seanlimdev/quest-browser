import Button from '@/components/Button';
import Rewards from '@/components/Rewards';
import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	max-width: 755px;
	width: 100%;
	height: calc(100% - 70px);
	${({ theme: { spacing } }) => `
    padding: ${spacing['2xs']} ${spacing.s};
		margin-bottom: ${spacing['4xs']};
  `};
`;

export const QuestInfos = styled.div`
	position: relative;
	height: 100%;
	background-color: #1d1c1a;
	${({ theme: { colors, radius, spacing } }) => `
		padding: ${spacing['5xs']};
		border: ${colors.border?.lightGrey500};
		border-radius: ${radius.xl};
	`}

	${Rewards} {
		position: absolute;
		bottom: 24px;
		left: 16px;
	}

	${Button} {
		position: absolute;
		bottom: 24px;
		right: 16px;
	}

	.ng-cross {
		position: absolute;
		cursor: pointer;
		background: none;
		border: none;
		z-index: 1;
		top: 10px;
		right: 10px;
	}

	.clear-radius {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export const WrappedTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${({ theme: { spacing } }) => `
    margin: ${spacing['5xs']} 0;
    
    h2 {
      margin: 0 ${spacing['4xs']};
    }
	`}

	.rotate {
		transform: rotate(180deg);
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	${({ theme: { spacing } }) => `
    padding: 0 ${spacing['3xs']};
    
    > p {
      margin-top: ${spacing['2xs']};
    }
	`}
`;
