/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and nextJS
import React from 'react';

// Antd
import {
	Col,
	Row
} from 'antd';

// Custom
import { theme } from '@/styles/theme'

// Animations
import { motion } from 'framer-motion';
import { animContainer, animItem } from '../tools/animations';
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
						<Col xs={24} md={14}>
							<div className="data">
								<motion.div variants={animItem}>
									<div>
										<p className="my-name">{t("index_my-name")}</p>
										<h1>Wilfer Daniel Ciro Maya</h1>
										<h2>{t("index_subtitle")}</h2>
										<p>{t("index_description")}</p>
									</div>
								</motion.div>
							</div>
						</Col>
						<Col xs={24} md={10}>
							<div className="image">
								<motion.div variants={animItem}>
									<MePhoto />
								</motion.div>
							</div>
						</Col>
					</Row>
				</motion.div>

			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 10px 20%;
					}
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
					}
					@media (max-width: 767px) {
						section {
							padding: 100px 20px;
							display: block;
						}
						h1{
							font-size: 27px;
						}
						.data{
							height: auto;
						}
						
					}
				`}
			</style>
		</>
	)
}

export default React.memo(IndexSection)