/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// Next and react
import React, {useEffect} from "react"

// Animations
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animContainer, animItem, rotateItem } from "@/components/tools/animations";

// Antd
import {
	Tag
} from 'antd'
import { style } from "@/styles/index/skill-item";

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
						<motion.div
							variants={rotateItem}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 30
							}}
						>
							<div className="image"></div>
						</motion.div>
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
			<style jsx>{style}</style>
			<style jsx>{`
				.image{
					background-image: url(${image});
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
				}
			`}</style>	
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