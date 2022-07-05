/*
	Created by Wilfer Daniel Ciro Maya - 2021
*/

// NextJS and react
import React, { useEffect } from "react"
import dynamic from 'next/dynamic'

// Animations
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Antd

// Custom
import { style } from "@/styles/index/project-item";
import Tag from "../controls/Tag";
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
			<div className="project">
				<div className={right ? "image image-right" : "image"}>
					<ImageCollection images={images} />
				</div>
					
				<div className={right ? "description description-right" : "description"}>
					<h3>{title}</h3>
					<p>{description}</p>
					<hr />
					<div className="tags">
						{
							tags.map((item: string, index: number) => {
								return <Tag key={"color-" + index} text={item} />
							})
						}
					</div>
					<hr />
					{children}
				</div>

			</div>

			<style jsx>{style}</style>
		</>
	)
}

export default React.memo(ProjectItem)