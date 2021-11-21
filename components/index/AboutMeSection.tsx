
/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and next
import React, { useEffect } from 'react';
import Image from 'next/image'

// Antd
import { Timeline, Divider, Row, Col, Typography } from 'antd';
import { theme } from '@/styles/theme';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Translate
import useTranslation from 'next-translate/useTranslation';

import SyntaxHighlighter from 'react-syntax-highlighter';
import style from '@/styles/json-code';

const { Text } = Typography;


const AboutMeSection = () => {

	const { t } = useTranslation("home")
	
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const calculate_age = () => {
		let today = new Date();
		let birthDate = new Date("1998/05/29");  // create a date object directly from `dob1` argument
		let age_now = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
		{
			age_now--;
		}
		return age_now;
	}


	const myData = {
		"name" : "Wilfer Daniel Ciro Maya",
		"spanish" : t("about_spanish"),
		"english" : "B1",
		"age" : calculate_age(),
		"county" : "Colombia 🇨🇴️",
		"hobbies" : [
			t("gym"),
			t("series_movies"),
			t("video_games"),
			t("travel")
		],
		"profession" : t("about_profession")
	}

	return (
		<>
			<section id="about">
				<motion.div
					ref={ref}
					variants={animContainer}
					initial="hidden"
					animate={controls}
				>
					<Row gutter={[30, 16]} align="top">
						<Col xs={24} md={11}>
							<h3>{t("about_about-me")}</h3>
							<Divider />
							<div className="my-description">
								<div className="image">
									<Image
										src={"/img/index/me.webp"}
										width={100}
										height={100}
										layout={"responsive"}
									/>
								</div>
								<p>{t("about_description")}</p>
								<p>{t("about_description2")}</p>
							</div>
							<Divider />
							<SyntaxHighlighter language="json" style={style} wrapLongLines={true}>
								{JSON.stringify(myData, null, 4)}
							</SyntaxHighlighter>
						</Col>
						<Col xs={23} md={13}>
							<h3 className="h3-right">{t("about_timeline")}</h3>
							<Divider />
							<motion.div variants={animItem}>
								<Timeline mode="left" pending={t("about_next") + "..."}>
									<Timeline.Item label="29 de mayo de 1998">
										<Text>{t("about_my-birth")}</Text><br />
										<Text type="secondary">En La Unión Antioquia - Colombia</Text>
									</Timeline.Item>
									<Timeline.Item color="green" label="Mayo de 2013">
										<Text>{t("about_start-programming")}</Text><br />
										<Text type="secondary">De forma &quot;Autodidacta&quot; a través de textos y videotutoriales</Text>
									</Timeline.Item>
									<Timeline.Item color="green" label="Diciembre de 2014">
										<Text>{t("about_finish-high-school")}</Text><br />
										<Text type="secondary">En el colegio Policarpa Salavarrieta de Quimbaya, Quindío</Text>
									</Timeline.Item>
									<Timeline.Item color="green" label="Diciembre de 2014">
										<Text>{t("about_finish-sena")}</Text><br />
										<Text type="secondary">Donde aprendí HTML, CSS, PHP y MySQL</Text>
									</Timeline.Item>
									<Timeline.Item color="purple" label="15 de Mayo de 2020">
										<Text>{t("about_first-job")}</Text><br />
										<Text type="secondary">Inicia mi vida laboral como desarrollador Junior Full Stack, desarrollando con Java, SQL, no SQL, Flutter, React y Nextjs</Text>
									</Timeline.Item>
									<Timeline.Item color="green" label="Junio de 2020">
										<Text>{t("about_finish-university")}</Text><br />
										<Text type="secondary">Graduado de Ingeniería Electrónica con profundización en Sistemas digitales</Text>
									</Timeline.Item>
									<Timeline.Item color="purple" label="15 de septiembre de 2021">
										<Text>{t("about_second-job")}</Text><br />
										<Text type="secondary">Como desarrollador full stack con tecnologías como: React, mongo DB, express</Text>
									</Timeline.Item>
								</Timeline>
							</motion.div>
						</Col>
					</Row>
				</motion.div>
			</section>

			<style jsx>
				{`
					h3{
						color: ${theme.primary}
					}
					.h3-right{
						text-align: right;
					}
					pre {
						background-color: ghostwhite;
						border: 1px solid silver;
						padding: 10px 20px;
						margin: 20px;
						border-radius: 4px;
						width: 100%;
						margin-left: auto;
						margin-right: auto;
						white-space: pre-line;

					}
					.my-description{

					}
					.image{
						margin: auto;
						width: 40%;
						border-radius: 100%;
						overflow: hidden;
						margin-bottom: 10px;
						float: left;
						shape-outside:circle();
					}
					p{
						text-align: justify;
					}
					@media (max-width: 767px) {
						section{
							padding: 20px 25px;
						}
						.h3-right{
							text-align: left;
						}
					}
				`} 
			</style>
		</>
	)
}

export default React.memo(AboutMeSection)