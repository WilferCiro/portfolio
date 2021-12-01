/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJs and react
import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Custom
const Logo = dynamic(() => import('@/components/icons/Logo'))

// Antd
import { Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

// Animations
import { motion } from 'framer-motion'
import { animContainer, animItem } from '@/components/tools/animations'

// Translate
import useTranslation from 'next-translate/useTranslation'


const Header = () => {

	const { t } = useTranslation("home")

	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<>
			<div className="darkMode">

			</div>
			<motion.div
				variants={animContainer}
				initial="hidden"
				animate="visible"
			>
				<div className={showMenu ? "background" : ""} onClick={e=> showMenu ? setShowMenu(false) : null} />
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
								<li>
									<Link href="#index">
										<a onClick={e=> showMenu ? setShowMenu(false) : null}>{t("header_index")}</a>
									</Link>
								</li>
								<li>
									<Link href="#about">
										<a onClick={e=> showMenu ? setShowMenu(false) : null}>{t("header_about")}</a>
									</Link>
								</li>
								<li>
									<Link href="#projects">
										<a onClick={e=> showMenu ? setShowMenu(false) : null}>{t("header_projects")}</a>
									</Link>
								</li>
								<li>
									<Link href="#skills">
										<a onClick={e=> showMenu ? setShowMenu(false) : null}>{t("header_skills")}</a>
									</Link>
								</li>
								<li>
									<Link href="#contact">
										<a onClick={e=> showMenu ? setShowMenu(false) : null}>{t("header_contact")}</a>
									</Link>
								</li>
								<li className="resume-btn">
									<Link href="https://drive.google.com/file/d/1HtbNVGocGdFbvCa7mgrWlFrlw-s6oGyD/view?usp=sharing">
										<a rel="noreferrer" target="_blank">{t("header_resume")}</a>
									</Link>
								</li>
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
				`}
			</style>
		</>
	)
}

export default React.memo(Header)