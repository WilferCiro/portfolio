import css from 'styled-jsx/css'

export const headerStyle =  css`
	header{
		width: 100%;
		padding: 10px 50px;
		background: var(--heading-color);
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 20;
	}
	ul{
		margin: 0px;
		padding: 0px;
		list-style: none;
		display: flex;
	}
	ul li {
		float: left;
	}
	ul li a {
		padding: 10px 20px;
		transition: all 0.3s;
		display: block;
	}
	ul li a:hover {
		color:  var(--primary-color);
		cursor: pointer;
	}
	a{
		color: var(--font-color)
	}
	.resume-btn a{
		border: solid 1px  var(--primary-color);
		border-radius: 2px;
	}
	.resume-btn a:hover{
		background: var(--primary-color);
		color: white !important;
	}
	.show-mobile{
		display: none;
	}
	.btn{
		z-index: 20;
		display: none;
	}
	@media (max-width: 767px) {
		.show-mobile{
			display: block;
			margin-left: 25px;
		}
		.btn{
			display: block;
		}
		.menu {
			overflow: hidden;
			opacity: 0;
			width: 0px;
			background: var(--bg-color);
			z-index: 10;
			position: fixed;
			left: 0px;
			height: 100vh;
			transition: all 0.2s;
		}
		.menu-show{
			display: block;
			width: 60%;
			opacity: 1;
		}
		ul{
			margin-top: 30px;
			display: block;
		}
		.background{
			content: "";
			position: fixed;
			left: 0px;
			top: 0px;
			width: 100%;
			height: 100vh;
			background: rgba(0, 0, 0, 0.5);
			z-index: 2;
		}
		ul li {
			float: none;
			padding: 10px 20px;
			transition: all 0.3s;
		}
		header{
			padding: 10px 25px;
		}
	}
`