import css from 'styled-jsx/css'
import { theme } from '@/styles/theme'

export const style =  css.global`
	:root {
		--primary-color: #0EA9CE;
		--font-color: #0A192F;
		--secondary-font-color: #76819D;
		--bg-color: #fff;
		--heading-color: #EFEFF4;
		--border-color: #303030;
	}
	[data-theme="dark"] {
		--primary-color: #0EA9CE;
		--font-color: #CCD6F6;
		--secondary-font-color: #76819D;
		--bg-color: #161625;
		--heading-color: #1E1E1E;
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
		color: var(--primary-color)
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