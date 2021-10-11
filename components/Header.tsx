/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React, { useState } from 'react'


// Custom
import { Logo } from './icons/Logo'
import { theme } from '@/styles/theme'

// Antd
import { Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'


const Header = () => {

	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<>
			<header>
				<Logo />
				<div className={showMenu ? "menu menu-show" : "menu"}>
					<div className="show-mobile">
						<Logo />
					</div>
					<ul>
						<li>About me</li>
						<li>Projects</li>
						<li>Skills</li>
						<li>Contact</li>
						<li className="resume-btn">Resume</li>
					</ul>
				</div>
				<div className="btn">
					<Button icon={showMenu ? <CloseOutlined /> : <MenuOutlined /> } shape="circle" size="large" onClick={e=> setShowMenu(!showMenu)}></Button>
				</div>
			</header>

			<style jsx>
				{`
					header{
						width: 100%;
						padding: 10px 50px;
						background: ${theme.bgPrimary};
						display: flex;
						justify-content: space-between;
						position: fixed;
						top: 0px;
						left: 0px;
						z-index: 2;
					}
					ul{
						margin: 0px;
						padding: 0px;
						list-style: none;
					}
					ul li {
						float: left;
						padding: 10px 20px;
						transition: all 0.3s;
					}
					ul li:hover {
						color: ${theme.primary};
						cursor: pointer;
					}
					.resume-btn{
						border: solid 1px ${theme.primary};
						border-radius: 2px;
					}
					.resume-btn:hover{
						background: ${theme.primary};
						color: white;
					}
					.show-mobile{
						display: none;
					}
					.btn{
						z-index: 20;
					}
					@media (max-width: 767px) {
						.show-mobile{
							display: block;
						}
						.menu {
							display: none;
							width: 60%;
							background: ${theme.bgPrimary};
							z-index: 10;
							position: fixed;
							left: 0px;
							height: 100vh;
						}
						.menu-show{
							display: block;
						}
						ul::before{
							content: "";
							position: fixed;
							left: 0px;
							top: 0px;
							width: 100%;
							height: 100vh;
							background: rgba(0, 0, 0, 0.5);
							z-index: -4;
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
				`}
			</style>
		</>
	)
}

export default React.memo(Header)