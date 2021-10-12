/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// Next and react
import React, {useEffect} from "react"
import Image from 'next/image'

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Antd
import {
	Tag,
	Card
} from 'antd'
const { Meta } = Card;

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
	)
}

export default React.memo(SkillItem)