
import React from 'react';
import Link from 'next/link'

// Antd
import {
	GithubOutlined,
	LinkedinFilled,
	MailFilled,
	InstagramFilled,
	GitlabFilled,
} from '@ant-design/icons';

// Translate
import useTranslation from 'next-translate/useTranslation';
import { floatInfoStyle } from '@/styles/layout/float-info';
import Tooltip from '../controls/Tooltip';

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
				<Link href="https://github.com/WilferCiro">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_github")}>
							<GithubOutlined />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://gitlab.com/WilferCiro">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_gitlab")}>
							<GitlabFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/wilfer-ciro/">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_linkedin")}>
							<LinkedinFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="mailto:wilcirom@gmail.com">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_mail")}>
							<MailFilled />
						</Tooltip>
					</a>
				</Link>
				<Link href="https://www.instagram.com/wilcirom/">
					<a target="_blank" rel="noreferrer">
						<Tooltip title={t("goto_instagram")}>
							<InstagramFilled />
						</Tooltip>
					</a>
				</Link>
			</div>

			<style jsx>{floatInfoStyle}</style>
		</>
	)
}

export default React.memo(FloatInfo)