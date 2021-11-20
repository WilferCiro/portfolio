
/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and next
import React, { useEffect } from 'react';

// Antd
import { Timeline, Divider, Row, Col } from 'antd';
import { theme } from '@/styles/theme';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Translate
import useTranslation from 'next-translate/useTranslation';

import SyntaxHighlighter from 'react-syntax-highlighter';
import style from '@/styles/json-code';

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
					<Row gutter={[20, 16]} align="top">
						<Col xs={24} md={11}>
							<h3>{t("about_about-me")}</h3>
							<Divider />
							<p>{t("about_description")}</p>
							<p>{t("about_description2")}</p>
							<SyntaxHighlighter language="json" style={style} wrapLongLines={true}>
								{JSON.stringify(myData, null, 4)}
							</SyntaxHighlighter>
						</Col>
						<Col xs={23} md={13}>
							<h3 className="h3-right">{t("about_timeline")}</h3>
							<Divider />
							<motion.div variants={animItem}>
								<Timeline mode="left" pending={t("about_next") + "..."}>
									<Timeline.Item label="29 de mayo de 1998">{t("about_my-birth")}</Timeline.Item>
									<Timeline.Item color="green" label="Mayo de 2013">{t("about_start-programming")}</Timeline.Item>
									<Timeline.Item color="green" label="Diciembre de 2014">{t("about_finish-high-school")}</Timeline.Item>
									<Timeline.Item color="green" label="Diciembre de 2014">{t("about_finish-sena")}</Timeline.Item>
									<Timeline.Item color="purple" label="15 de Mayo de 2020">{t("about_first-job")}</Timeline.Item>
									<Timeline.Item color="green" label="Junio de 2020">{t("about_finish-university")}</Timeline.Item>
									<Timeline.Item color="purple" label="15 de septiembre de 2021">{t("about_second-job")}</Timeline.Item>
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
					.image{
						margin: auto;
						width: 70%;
						border-radius: 100%;
						overflow: hidden;
						margin-bottom: 10px;
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