
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
					<Row gutter={[32, 16]} align="middle">
						<Col xs={24} md={9}>
							<div className="image">
								<motion.div variants={animItem}>
									<Image
										alt="My Photo"
										src={"/img/index/me2.webp"}
										layout={"responsive"}
										width={350}
										height={350}
									/>
								</motion.div>
							</div>
							<p>{t("about_description")}</p>
							<p>
								<b>{t("about_title_profession")}: </b>{t("about_profession")}<br />
								<b>{t("about_title_spanish")}: </b>{t("about_spanish")}<br />
								<b>{t("about_title_english")}: </b>B1<br />
								<b>{t("about_title_age")}: </b>{calculate_age()}<br />
							</p>
						</Col>
						<Col xs={23} md={15}>
							<motion.div variants={animItem}>
								<Timeline mode="left">
									<Timeline.Item label="1998-05-29">{t("about_my-birth")}</Timeline.Item>
									<Timeline.Item color="green" label="2013-05-05">{t("about_start-programming")}</Timeline.Item>
									<Timeline.Item color="green" label="2014-12-12">{t("about_finish-high-school")}</Timeline.Item>
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