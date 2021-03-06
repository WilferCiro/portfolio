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
import { style } from '@/styles/index/index-section'

// Animations
import { motion } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import MePhoto from '@/components/index/MePhoto';

// Translate
import useTranslation from "next-translate/useTranslation"
import ParticlesBG from '../portfolio/ParticlesBG';

const IndexSection = () => {

	const { t } = useTranslation("home")
	
	return (
		<>
			<ParticlesBG />
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
										<Link href="https://drive.google.com/file/d/1KeP3WUR0Cl7UBaBmlFkR6gmfSgAce2On/view?usp=sharing">
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

			<style jsx>{style}</style>
		</>
	)
}

export default React.memo(IndexSection)