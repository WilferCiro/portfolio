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
import { headerStyle } from '@/styles/layout/header'


const Header = () => {

	const { t } = useTranslation("home")
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const links = [
		{"title" : t("header_index"), "href" : "index"},
		{"title" : t("header_about"), "href" : "about"},
		{"title" : t("header_skills"), "href" : "skills"},
		{"title" : t("header_projects"), "href" : "projects"},
		{"title" : t("header_contact"), "href" : "contact"},
	]

	return (
		<>
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
								{
									links.map((link: any, index: number) => {
										return (
											<li key={index}>
												<Link href={"#" + link.href}>
													<a onClick={e=> showMenu ? setShowMenu(false) : null}>{link.title}</a>
												</Link>
											</li>
										)
									})
								}
								<li className="resume-btn">
									<Link href="https://drive.google.com/file/d/1KeP3WUR0Cl7UBaBmlFkR6gmfSgAce2On/view?usp=sharing">
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
			{/*<ModalCV ref={refModal} />*/}

			<style jsx>{headerStyle}</style>
		</>
	)
}

export default React.memo(Header)