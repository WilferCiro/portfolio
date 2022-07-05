import css from 'styled-jsx/css'

export const style =  css`
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
	.clear{
		clear: both;
	}
	.image{
		margin: auto;
		width: 35%;
		border-radius: 100%;
		overflow: hidden;
		margin-bottom: 10px;
		float: left;
	}
	p{
		text-align: justify;
	}

	ul {
		list-style: none;
		position: flex;
		flex-direction: row;
	}
	ul li {
		display: grid;
		grid-template-columns: 20% 80%;
		align-items: center;
	}
	
	.content {
		width: 100%;
		border: solid 1px black;
		padding: 20px 30px;
		border-radius: 10px;
	}
	ul li * {
		margin: 0px;
	}

	.about_description{
		width: 65%;
		margin-left: 35%;
		margin-top: 20px;
		display: block;
		position: relative;
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