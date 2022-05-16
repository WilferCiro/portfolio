import css from 'styled-jsx/css'

export const style =  css`
	.data{
		text-align: center;
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
		min-height: calc(100vh - 100px);
		padding: 10px 20% 10px 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}

	@media (min-width: 768px) and (max-width: 990px) {
	}
	@media (max-width: 767px) {
		
	}
`