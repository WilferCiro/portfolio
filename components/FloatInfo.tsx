
import React from 'react';
import Link from 'next/link'

import { theme } from '@/styles/theme'

// Antd
import {
	Space,
	Tooltip,
	Anchor,
	Button
} from 'antd';
// Antd
const LinkAntd = Anchor.Link;
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

const FloatInfo = () => {

	const { t, lang } = useTranslation("home")
	
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

			<style jsx>
				{`
					.social-network {
						position: fixed;
						bottom: 25%;
						left: 20px;
						font-size: 25px;
					}
					.line{
						border-left: solid 1.5px ${theme.textPrimary};
						height: 70px;
						margin-left: calc(50% - 0.75px);
					}
					a{
						color: ${theme.textPrimary};
						margin-bottom: 20px;
					}
					a:hover{
						color: ${theme.primary}
					}
					.anchor{
						position: fixed;
						right: 1%;
						bottom: 1%;
						color: ${theme.textPrimary};
						background: ${theme.bgPrimary};
					}
					@media (max-width: 767px) {
						.social-network, .anchor{
							display: none;
						}
						.anchor{
							display: none;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(FloatInfo)