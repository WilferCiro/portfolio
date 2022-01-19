/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React, { useEffect } from "react"
import dynamic from 'next/dynamic'

// Animations
import { motion, useAnimation } from 'framer-motion';
import { animContainer, animItem } from '@/components/tools/animations';
import { useInView } from 'react-intersection-observer';

// Antd
import { Divider, Tag } from "antd";

// Custom
import { style } from "@/styles/index/project-item";
const ImageCollection = dynamic(() => import('@/components/portfolio/ImageCollection'))


interface Props {
	children: JSX.Element,
	images: Array<string>,
	tags: Array<string>,
	title: string,
	description: string,
	right?: boolean
}

const ProjectItem = ({children, images, tags, right, title, description} : Props) => {
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
					<div className="project">
						<div className={right ? "image image-right" : "image"}>
							<ImageCollection images={images} />
							<div className="tags">
								{
									tags.map((item: string, index: number) => {
										return <Tag color={"#0EA9CE"} key={"color-" + index}>{item}</Tag>
									})
								}
							</div>
						</div>
							
						<div className={right ? "description description-right" : "description"}>
							<h3>{title}</h3>
							<p>{description}</p>
							<Divider />
							{children}
						</div>

					</div>
				</motion.div>
			</motion.div>

			<style jsx>{style}</style>
		</>
	)
}

export default React.memo(ProjectItem)