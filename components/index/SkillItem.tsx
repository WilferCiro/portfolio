/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// Next and react
import React, {useEffect} from "react"

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animContainer, animItem } from "@/components/tools/animations";

// Antd
import {
	Tag
} from 'antd'
import { theme } from "@/styles/theme";

interface Props {
	title: string,
	items: Array<string>,
	image: string
}

const SkillItem = ({title, items, image} : Props) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			<motion.div
				ref={ref}
				variants={animContainer}
				initial="hidden"
				animate={controls}
			>
				<motion.div variants={animItem}>
					<div className="skill">
						<div className="image"></div>
						<div className="description">
							<p>{title}</p>
							<div className="">
								{
									items.map((item: string) => {
										return <Tag key={Math.random()}>{item}</Tag>
									})
								}
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
			<style jsx>
			{`
				.skill{
					background: ${theme.bgPrimary};
					width: 100%;
					height: 200px;
					overflow: hidden;
					position: relative;
					text-align: center;
				}
				.image{
					background-image: url(${image});
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					width: 80px;
					height: 80px;
					transition: all 0.1s;
					margin: 10px auto;
				}
				.description {
					padding: 10px 15px;
					width: 100%;
					margin-top: -10px;
					background: ${theme.bgPrimary};
				}
				.description p{
					color: ${theme.primary}
				}
			`}
			</style>
		</>
	)
}

export default React.memo(SkillItem)

/*

			<motion.div
				ref={ref}
				variants={animContainer}
				initial="hidden"
				animate={controls}
			>
				<motion.div variants={animItem}>
					<Card
						style={{ width: "100%", height: "100%" }}
						cover={<Image width={800} height={400} alt="example" src={image} />}
					>
						<Meta title={title} description={
							items.map((item: string) => {
								return <Tag key={Math.random()}>{item}</Tag>
							})
						} />
					</Card>
				</motion.div>
			</motion.div>

*/