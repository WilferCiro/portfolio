import css from 'styled-jsx/css'

export const style =  css.global`
	:root {
		/*--primary-color: #0EA9CE;
		--font-color: #1E1E1E;
		--secondary-font-color: #76819D;
		--bg-color: #F0F2F5;
		--bg-color2: #E5EBF3;
		--heading-color: #FFF;
		--border-color: #FFF;*/

		--primary-color: #0EA9CE;
		--font-color: #CCD6F6;
		--secondary-font-color: #76819D;
		--bg-color: #181719;
		--bg-color2: #1E1E1E;
		--heading-color: #282828;
		--border-color: #303030;

	}

	[data-theme="dark"] {
		--primary-color: #0EA9CE;
		--font-color: #CCD6F6;
		--secondary-font-color: #76819D;
		--bg-color: #181719;
		--bg-color2: #1E1E1E;
		--heading-color: #282828;
		--border-color: #303030;
	}

	html {
		scroll-behavior: smooth;
	}
	* {
		box-sizing: border-box;
	}
	body{
		margin: 0px;
		padding: 0px;
		color: var(--font-color);
		background: var(--bg-color) !important;
		font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	.main-content{
		min-height: 100vh;
		width: 50vw;
		margin: auto;
		margin-top: 100px;
	}
	section {
		min-height: 100vh;
		padding: 25px 15px;
	}
	section.dark-to-clear{
		background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-color) 80%, var(--bg-color2) 100%);	
	}
	section.clear-to-dark{
		background: linear-gradient(180deg, var(--bg-color2) 0%, var(--bg-color2) 80%, var(--bg-color) 100%);	
	}

	h3 {
		color: var(--primary-color) !important;
	}
	@media (min-width: 991px) and (max-width: 1380px) {
	}
	@media (min-width: 768px) and (max-width: 990px) {
		.main-content{
			width: 100vw;
		}
	}
	@media (max-width: 767px) {
		.main-content{
			width: 100vw;
		}
	}
`