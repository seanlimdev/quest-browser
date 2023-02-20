import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	html,
	body,
	#__next {
  	height: 100%;
	}

	h1, h2, h3 {
		margin: 0;
		color: ${({ theme }) => theme.colors.white};
	}

	p {
		margin: 0;
	}

	body {
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.black};
		margin: 0;
	}


`;

export default GlobalStyle;
