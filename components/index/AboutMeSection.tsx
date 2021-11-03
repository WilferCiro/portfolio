
/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// React and next
import React, { useEffect } from 'react';
import Image from 'next/image'

// Antd
import { Timeline, Divider, Row, Col } from 'antd';
import { theme } from '@/styles/theme';

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Translate
import useTranslation from 'next-translate/useTranslation';
import JSONInput from 'react-json-editor-ajrm';
import locale    from '@/locales/json/es';

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

	return (
		<>
			<section id="about">
				<motion.div
					ref={ref}
					variants={animContainer}
					initial="hidden"
					animate={controls}
				>
					<h3>{t("about_about-me")}</h3>
					<Divider />
					<Row gutter={[20, 16]} align="middle">
						<Col xs={24} md={10}>
							<div className="image">
								<motion.div variants={animItem}>
									<Image
										alt="My Photo"
										src={"/img/index/me.webp"}
										layout={"responsive"}
										width={350}
										height={350}
									/>
								</motion.div>
							</div>
							<p>{t("about_description")}</p>
							<JSONInput viewOnly={true} locale={locale} id={"my_data"} height="270px" width="100%" placeholder=
								{
									{
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
								} />
						</Col>
						<Col xs={23} md={14}>
							<motion.div variants={animItem}>
								<Timeline mode="left">
									<Timeline.Item label="1998-05-29">{t("about_my-birth")}</Timeline.Item>
									<Timeline.Item color="green" label="2013-05-05">{t("about_start-programming")}</Timeline.Item>
									<Timeline.Item color="green" label="2014-12-12">{t("about_finish-high-school")}</Timeline.Item>
									<Timeline.Item color="green" label="2014-12-15">{t("about_finish-sena")}</Timeline.Item>
									<Timeline.Item color="purple" label="2020-05-15">{t("about_first-job")}</Timeline.Item>
									<Timeline.Item color="green" label="2020-08-10">{t("about_finish-university")}</Timeline.Item>
									<Timeline.Item color="purple" label="2021-08-15">{t("about_second-job")}</Timeline.Item>
								</Timeline>
							</motion.div>
						</Col>
					</Row>
				</motion.div>
			</section>

			<style jsx>
				{`
					section {
						min-height: 100vh;
						padding: 100px 20% 10px 20%;
					}
					h3{
						color: ${theme.primary}
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
					}
				`} 
			</style>
		</>
	)
}

export default React.memo(AboutMeSection)