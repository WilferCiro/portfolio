import css from 'styled-jsx/css'

export const style =  css.global`
	:root {
		--primary-color: #0EA9CE;
		--font-color: #1E1E1E;
		--secondary-font-color: #76819D;
		--bg-color: #F0F2F5;
		--bg-color2: #E5EBF3;
		--heading-color: #FFF;
		--border-color: #FFF;
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
	}
	section {
		min-height: 100vh;
		padding: 100px 20% 10px 20%;
	}
	h3 {
		color: var(--primary-color) !important;
	}
	@media (min-width: 991px) and (max-width: 1380px) {
		section {
			padding: 100px 10% 10px 10%;
			display: block;
		}
	}
	@media (min-width: 768px) and (max-width: 990px) {
		section {
			padding: 100px 20px;
			display: block;
			text-align: center;
		}
	}
	@media (max-width: 767px) {
		section{
			padding: 20px 15px;
		}
	}
`