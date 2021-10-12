
import React from 'react';
import Link from 'next/link'

import { theme } from '@/styles/theme'

// Antd
import {
	Space,
	Tooltip,
	Anchor
} from 'antd';
// Antd
const LinkAntd = Anchor.Link;
import {
	GithubOutlined,
	LinkedinFilled,
	MailFilled,
	InstagramFilled,
	GitlabFilled
} from '@ant-design/icons';

// Animations
import { motion } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';

const FloatInfo = () => {
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
									<Tooltip placement="right" title={"Go to GitHub profile"}>
										<GithubOutlined />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://gitlab.com/WilferCiro">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={"Go to GitLab profile"}>
										<GitlabFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://www.linkedin.com/in/wilfer-ciro/">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={"Go to LinkedIn profile"}>
										<LinkedinFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="mailto:wilcirom@gmail.com">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={"Send me an email"}>
										<MailFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<Link href="https://www.instagram.com/wilcirom/">
							<a target="_blank" rel="noreferrer">
								<motion.div variants={animItem}>
									<Tooltip placement="right" title={"Go to Instagram profile"}>
										<InstagramFilled />
									</Tooltip>
								</motion.div>
							</a>
						</Link>
						<motion.div variants={animItem}>
							<div className="line" />
						</motion.div>
					</Space>
				</motion.div>
			</div>
			<div className="anchor">
			</div>

			<style jsx>
				{`
					.social-network {
						position: fixed;
						bottom: 0px;
						left: 5%;
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
						right: 5%;
						bottom: 40%;
						color: ${theme.textPrimary};
					}
					@media (max-width: 767px) {
						.social-network, .anchor{
							display: none;
						}
					}
				`}
			</style>
		</>
	)
}

export default React.memo(FloatInfo)