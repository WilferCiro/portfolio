import css from 'styled-jsx/css'

export const style =  css`
	.h3-right{
		text-align: right;
	}
	pre {
		background-color: ghostwhite;
		border: 1px solid silver;
		padding: 10px 20px;
		margin: 20px;
		border-radius: 4px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		white-space: pre-line;

	}
	.my-description{

	}
	.image{
		margin: auto;
		width: 40%;
		border-radius: 100%;
		overflow: hidden;
		margin-bottom: 10px;
		float: left;
		shape-outside:circle();
	}
	p{
		text-align: justify;
	}
	@media (max-width: 767px) {
		section{
			padding: 20px 25px;
		}
		.h3-right{
			text-align: left;
		}
	}
`