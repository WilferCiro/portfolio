import css from 'styled-jsx/css'

export const style =  css`
	.skill{
		background: var(--heading-color);
		width: 100%;
		height: 220px;
		overflow: hidden;
		position: relative;
		text-align: center;
		border-radius: 5px;
	}
	.image{
		width: 80px;
		height: 80px;
		transition: all 0.1s;
		margin: 10px auto;
	}
	.description {
		padding: 10px 15px;
		width: 100%;
		margin-top: -10px;
		background: var(--heading-color);
	}
	.description p{
		color: var(--primary-color)
	}
`