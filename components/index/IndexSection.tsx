/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and nextJS
import React from 'react';
import Link from 'next/link'

// Antd
import {
	Button,
	Col,
	Divider,
	Row
} from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

// Custom
import { theme } from '@/styles/theme'

// Animations
import { motion } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import MePhoto from '@/components/index/MePhoto';

// Translate
import useTranslation from "next-translate/useTranslation"

const IndexSection = () => {

	const { t } = useTranslation("home")
	
	return (
		<>
			<section id="index">
				<motion.div
					variants={animContainer}
					initial="hidden"
					animate="visible"
				>
					<Row align="middle" justify="center">						
						<Col xs={24} md={11}>
							<div className="image">
								<motion.div variants={animItem}>
									<MePhoto />
								</motion.div>
							</div>
						</Col>
						<Col xs={24} md={13}>
							<div className="data">
								<motion.div variants={animItem}>
									<div>
										<p className="my-name">{t("index_my-name")}</p>
										<h1>Wilfer Daniel Ciro Maya</h1>
										<h2>{t("index_subtitle")}</h2>
										<p>{t("index_description")}</p>
										<Divider />
										<Link href="https://drive.google.com/file/d/1HtbNVGocGdFbvCa7mgrWlFrlw-s6oGyD/view?usp=sharing">
											<a target="_blank">
												<Button type="primary" icon={<CloudDownloadOutlined />}>{t("header_resume")}</Button>
											</a>
										</Link>
									</div>
								</motion.div>
							</div>
						</Col>
					</Row>
				</motion.div>

			</section>

			<style jsx>
				{`
					.data{
						height: 100vh;
						display: flex;
						align-items: center;
					}
					.my-name{
						color: ${theme.primary};
						margin: 0px;
						font-size: 20px;
					}
					h1{
						color: ${theme.textPrimary};
						font-size: 40px;
						margin: 0px;
					}
					h2{
						color: ${theme.textSecundary};
						font-size: 35px;
						margin: 0px;
					}
					section {
						min-height: 100vh;
						padding: 10px 20%;
					}
					@media (max-width: 767px) {
						section {
							padding: 100px 20px;
							display: block;
							text-align: center;
						}
						h1{
							font-size: 27px;
						}
						.data{
							height: auto;
							display: block;
						}
						.image{
							margin: auto;
							width: fit-content;
						}
						
					}
				`}
			</style>
		</>
	)
}

export default React.memo(IndexSection)