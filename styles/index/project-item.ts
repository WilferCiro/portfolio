import css from 'styled-jsx/css'
import { theme } from '@/styles/theme'

export const style =  css`
	.project{
		width: 90%;
		margin: auto;
		position: relative;
		margin-bottom: 80px;
		padding: 15px 5px;
		text-align: justify;
	}
	.project h3{
		color: ${theme.primary};
		font-weight: bold;
	}
	.image{
		width: 50%;
	}
	.image-right {
		margin-left: 50%;
		text-align: right;
	}
	img{
		width: 100%;
	}
	.description{
		position: absolute;
		background: ${theme.bgPrimary};
		top: 20%;
		left: 45%;
		width: 55%;
		z-index: 2;
		padding: 20px 30px;
		box-shadow: 2px 2px 5px black;
		border-radius: 5px;
	}
	.description-right {
		left: 0px;
	}
	.tags {
		width: 80%;
	}
	.image-right .tags{
		margin-left: 20%;
	}


	@media (min-width: 767px) and (max-width: 1100px) {
		.description{
			position: static;
			width: 100%;
			margin: auto;
			top: 0px;
			left: 0px;
			padding: 15px 10px;
		}
		.project {
			display: flex;
			justify-content: space-between;
		}
		.image{
			margin: 0px;
		}

	}
	@media (max-width: 767px) {
		.image{
			width: 100%;
			margin: 0px !important;
			padding: 0px;
			text-align: left;
		}
		.tags{
			width: 100%;
			margin: 0px !important;
			position: static;
		}
		.description{
			position: static;
			width: 100%;
			margin: auto;
			top: 0px;
			left: 0px;
			box-shadow: none;
			padding: 15px 10px;
			background: transparent;
		}
		.project{
			background: ${theme.bgPrimary};
			border-radius: 10px;
			padding: 5px 15px;
			margin-bottom: 10px;
			border: solid 1px ${theme.borderColor};
		}
	}
`