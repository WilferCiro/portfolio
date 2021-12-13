import css from 'styled-jsx/css'

export const style =  css`
	.data{
		height: 100vh;
		display: flex;
		align-items: center;
	}
	.my-name{
		color: var(--primary-color);
		margin: 0px;
		font-size: 20px;
	}
	h1{
		color: var(--font-color);
		font-size: 40px;
		margin: 0px;
	}
	h2{
		color: var(--secondary-font-color);
		font-size: 35px;
		margin: 0px;
	}
	section {
		min-height: 100vh;
		padding: 0px 20% 0px 20%;
		background: linear-gradient(180deg, var(--bg-color2) 0%, var(--bg-color2) 80%, var(--bg-color) 100%);
	}
	@media (max-width: 767px) {
		section {
			padding: 100px 20px;
			display: block;
			text-align: center;
		}
		h1{
			font-size: 27px;
		}
		.data{
			height: auto;
			display: block;
		}
		.image{
			margin: auto;
			width: fit-content;
		}
		
	}
`