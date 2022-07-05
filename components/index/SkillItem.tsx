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
import { style } from "@/styles/index/skill-item";
import Tag from "../controls/Tag";

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
						</motion.div>
						<div className="description">
							<div className="image2"></div>
							<p>{title}</p>
							<div className="">
								{
									items.map((item: string, index: number) => {
										return <Tag key={"item-" + index} text={item} />
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
				.image2{
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