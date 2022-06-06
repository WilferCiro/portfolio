import css from 'styled-jsx/css'

export const style =  css`
	.project{
		width: 100%;
		margin: auto;
		position: relative;
		margin-bottom: 10px;
		padding: 15px 5px;
		text-align: justify;
		height: 100%;
		display: flex;
	}
	.project h3{
		color: var(--primary-color);
		font-weight: bold;
	}
	.description{
		background: var(--heading-color);
		z-index: 2;
		padding: 20px 30px;
		box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
		border-radius: 5px;
	}
	.tags {
		width: 80%;
		margin-top: 20px;
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
			background: var(--heading-color);
			border-radius: 5px;
			padding: 5px 15px;
			margin-bottom: 10px;
			border: solid 1px var(--border-color);
		}
	}
`