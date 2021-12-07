
import React from 'react';
import Link from 'next/link'

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
						bottom: calc(50% - 114px);
						left: 20px;
						font-size: 25px;
						z-index: 100;
					}
					.line{
						border-left: solid 1.5px var(--font-color);
						height: 70px;
						margin-left: calc(50% - 0.75px);
					}
					a{
						color: var(--font-color);
						margin-bottom: 20px;
					}
					a:hover{
						color: var(--primary-color);
					}
					.anchor{
						position: fixed;
						right: 1%;
						bottom: 0px;
						color: var(--font-color);
						display: flex;
						flex-direction: column;
						gap: 15px;
						z-index: 100;

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