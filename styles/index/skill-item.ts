import css from 'styled-jsx/css'

export const style =  css`
	.skill{
		background: var(--heading-color);
		width: 100%;
		height: 230px;
		overflow: hidden;
		position: relative;
		text-align: center;
		border-radius: 20px;
	}
	.image{
		width: 90%;
		height: 220px;
		transition: all 0.1s;
		position: absolute;
		display: block;
		top: 5px;
		left: 5%;
		border-radius: 20px;
	}
	.image2{
		width: 100px;
		height: 100px;
		transition: all 0.1s;
		margin: auto;
		display: block;
	}
	.description {
		padding: 10px 15px;
		width: 100%;
		height: 100%;
		background: var(--heading-color-opacity);
		z-index: 100;
		backdrop-filter: blur(25px);
		transition: all 0.5s;
	}
`