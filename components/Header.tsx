/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Custom
import { theme } from '@/styles/theme'
const Logo = dynamic(() => import('@/components/icons/Logo'))

// Antd
import { Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

// Animations
import { motion } from 'framer-motion'
import { animContainer, animItem } from './tools/animations'


const Header = () => {

	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<>
			<motion.div
				variants={animContainer}
				initial="hidden"
				animate="visible"
			>
				<header>
					<motion.div variants={animItem}>
						<Logo />
					</motion.div>
					<div className={showMenu ? "menu menu-show" : "menu"}>
						<div className="show-mobile">
							<Logo />
						</div>
						<motion.div variants={animItem}>
							<ul>
								<Link href="#index">
									<a><li>Index</li></a>
								</Link>
								<Link href="#about">
									<a><li>About me</li></a>
								</Link>
								<Link href="#projects">
									<a><li>Projects</li></a>
								</Link>
								<Link href="#skills">
									<a><li>Skills</li></a>
								</Link>
								<Link href="#contact">
									<a><li>Contact</li></a>
								</Link>
								<Link href="https://drive.google.com/file/d/1809hgJ9cdoK8OD85Sf3bCjVFKFOgx-7f/view?usp=sharing">
									<a rel="noreferrer" target="_blank"><li className="resume-btn">Resume</li></a>
								</Link>
							</ul>
						</motion.div>
					</div>
					<div className="btn">
						<Button icon={showMenu ? <CloseOutlined /> : <MenuOutlined /> } shape="circle" size="large" onClick={e=> setShowMenu(!showMenu)}></Button>
					</div>
				</header>
			</motion.div>

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
						z-index: 20;
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
					a{
						color: ${theme.textPrimary}
					}
					.resume-btn{
						border: solid 1px ${theme.primary};
						border-radius: 2px;
					}
					.resume-btn:hover{
						background: ${theme.primary};
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