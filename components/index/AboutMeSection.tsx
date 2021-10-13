
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

const AboutMeSection = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			<section id="about">
				<motion.div
					ref={ref}
					variants={animContainer}
					initial="hidden"
					animate={controls}
				>
					<h3>About Me</h3>
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
							<p>I am a person willing to learn new things every day, responsible and very passionate about programming.</p>
							<p>
								<b>Profession: </b>Electronic engineer and fullstack developer<br />
								<b>Spanish: </b>Native<br />
								<b>English: </b>B1<br />
								<b>Age: </b>23<br />
							</p>
						</Col>
						<Col xs={23} md={15}>
							<motion.div variants={animItem}>
								<Timeline mode="left">
									<Timeline.Item label="1998-05-29">My birth</Timeline.Item>
									<Timeline.Item color="green" label="2013-05-05">Start studying programming</Timeline.Item>
									<Timeline.Item color="green" label="2014-12-12">Finish high school</Timeline.Item>
									<Timeline.Item color="purple" label="2020-05-15">I started my first job as a fullstack Junior developer </Timeline.Item>
									<Timeline.Item color="green" label="2020-08-10">I finished my university degree</Timeline.Item>
									<Timeline.Item color="purple" label="2021-08-15">I started my second job as fullstack at Negozia CF</Timeline.Item>
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