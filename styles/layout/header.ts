import css from 'styled-jsx/css'

export const headerStyle =  css`
	header{
		width: 100%;
		margin: 15px auto;
		border-radius: 10px;
		padding: 10px 50px;
		background: var(--heading-color);

		position: fixed;
		width: 54%;
		z-index: 10;
		top: 5px;
		left: 23%;

		display: flex;
		justify-content: space-between;
	}

	header button {
		background: var(--bg-color);
		border-radius: 10px;
		padding: 5px 15px;
		border: none;
		cursor: pointer;
	}
	header button:hover {
		opacity: 0.5;
	}
	
	@media (min-width: 768px) and (max-width: 990px) {
		header{
			width: 100%;
			left: 0px;
		}
	}
	@media (max-width: 767px) {
		header{
			width: 100%;
			left: 0px;
		}
	}
`