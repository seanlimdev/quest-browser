import styled from 'styled-components';

export const Container = styled.button`
	cursor: pointer;
	font-family: 'Cinzel';
	${({ theme: { fonts, spacing, colors, radius } }) => `
    font-weight: ${fonts.weight.bold};
    padding: ${spacing['4xs']} ${spacing.xs};
    border: ${colors.border?.gold};
    color: ${fonts.colors.white};
    border-radius: ${radius.s};
    background-color: #1d1c1a;
    line-height: 16px;
    text-transform: uppercase;
    
    &:hover {
      text-shadow: 0 0 5px ${colors.gold};
    }
  `}
`;
