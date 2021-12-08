import css from 'styled-jsx/css'

export const floatInfoStyle =  css`
	.social-network {
		position: fixed;
		bottom: calc(50% - 114px);
		left: 20px;
		font-size: 25px;
		z-index: 100;
	}
	.line{
		border-left: solid 1.5px var(--font-color);
		height: 70px;
		margin-left: calc(50% - 0.75px);
	}
	a{
		color: var(--font-color);
		margin-bottom: 20px;
	}
	a:hover{
		color: var(--primary-color);
	}
	.anchor{
		position: fixed;
		right: 1%;
		bottom: 0px;
		color: var(--font-color);
		display: flex;
		flex-direction: column;
		gap: 15px;
		z-index: 100;

	}
	@media (max-width: 767px) {
		.social-network, .anchor{
			display: none;
		}
		.anchor{
			display: none;
		}
	}
`