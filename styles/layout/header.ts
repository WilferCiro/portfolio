import css from 'styled-jsx/css'

export const headerStyle =  css`
	header{
		width: 100%;
		margin: 15px auto;
		border-radius: 10px;
		padding: 10px 50px;
		background: var(--heading-color-opacity);

		position: fixed;
		width: 54%;
		z-index: 10;
		top: 5px;
		left: 23%;

		display: flex;
		justify-content: space-between;

		backdrop-filter: blur(8px);
	}

	header button {
		background: var(--bg-color);
		border-radius: 10px;
		padding: 5px 15px;
		border: none;
		cursor: pointer;
		color: var(--font-color);
		height: 100%;
		display: flex;
		align-items: center;
		gap: 5px;
	}
	header button:hover {
		opacity: 0.5;
	}

	.left-icons{
		display: flex;
		gap: 25px;
		align-items: center;
	}

	.menu-dialog{
		border: none;
		width: 80%;
		height: 80vh;
		padding: 20px 50px;
		border-radius: 10px;
		background: var(--heading-color-opacity);
		backdrop-filter: blur(5px);
	}
	.menu-dialog::backdrop{
		background: rgba(0, 0, 0, 0.8);
	}

	.menu-dialog[open] {
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 6px;
		box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
		-webkit-animation: show-dialog 0.5s ease normal;
	}
	.menu-dialog.hide {
		-webkit-animation: hide-dialog 0.5s ease normal;
	}

	.menu-dialog[open]::backdrop {
		-webkit-animation: show-backdrop 0.5s ease 0.2s normal;
	}
	.menu-dialog.hide::backdrop {
		-webkit-animation: hide-backdrop 0.5s ease 0.2s normal;
	}
	@-webkit-keyframes show-dialog {
		from {
			opacity: 0;
			transform: translateY(-100%);
		}
		to {
			opacity: 1;
			transform: translateY(0%);
		}
	}
	@-webkit-keyframes hide-dialog{
		to {
			opacity: 0;
			transform: translateY(-100%);
		}
	}
	
	@-webkit-keyframes show-backdrop {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-webkit-keyframes hide-backdrop{
		to {
			opacity: 0;
		}
	}



	.menu{
		font-size: 4vw;
		list-style: none;
		text-align: center;
	}
	.menu li {
		margin-top: 20px;
	}
	.menu li a {
		color: white;
	}
	.menu li a:hover {
		color: var(--primary-color);
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