
import React from 'react';
import Link from 'next/link'

// Antd
import {
	Space,
	Tooltip,
	Button,
	Switch
} from 'antd';
// Antd
import {
	GithubOutlined,
	LinkedinFilled,
	MailFilled,
	InstagramFilled,
	GitlabFilled,
	TranslationOutlined
} from '@ant-design/icons';

// Animations
import { motion } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';

// Translate
import useTranslation from 'next-translate/useTranslation';
import { floatInfoStyle } from '@/styles/layout/float-info';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { setIsLight } from 'services/cookies';

const FloatInfo = () => {

	const { t, lang } = useTranslation("home")

	//const { switcher, themes, currentTheme } = useThemeSwitcher();

	const toggleDarkMode = () => {
		/*setIsLight(currentTheme === "dark" ? "true": "false")
		switcher({ theme: currentTheme === "dark" ? themes.light : themes.dark });*/
	};

	return (
		<>
			<div className="social-network">
				<motion.div
					variants={animContainer}
					initial="hidden"
					animate="visible"
				>
					<Space direction="vertical">
						<Link href="https://github.com/WilferCiro">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={t("goto_github")}>
										<GithubOutlined />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://gitlab.com/WilferCiro">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={t("goto_gitlab")}>
										<GitlabFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://www.linkedin.com/in/wilfer-ciro/">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={t("goto_linkedin")}>
										<LinkedinFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="mailto:wilcirom@gmail.com">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={t("goto_mail")}>
										<MailFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://www.instagram.com/wilcirom/">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={t("goto_instagram")}>
										<InstagramFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
					</Space>
				</motion.div>
			</div>
			<div className="anchor">
				{
					lang === "es" ? 
					<Link href="/en">
						<a>
							<Button type="link" icon={<TranslationOutlined />}>Ver en inglés</Button>
						</a>
					</Link>
					:
					<Link href="/es">
						<a>
							<Button type="link" icon={<TranslationOutlined />}>View in spanish</Button>
						</a>
					</Link>
				}
			</div>

			<style jsx>{floatInfoStyle}</style>
		</>
	)
}

export default React.memo(FloatInfo)